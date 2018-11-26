const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const port = 8040;
const sql = require("mssql");
const connStr = "Server=regulus;User Id=BD16167;Password=BD16167;";
const router = express.Router();

sql.connect(connStr)
.then(conn => global.conn = conn)
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use('/', router);

function execSQLQuery(sqlQry, res){
    global.conn.request()
               .query(sqlQry)
               .then(result => res.json(result.recordset))
               .catch(err => res.json(err));
}

app.listen(port, () => 
    console.log('API is running on port '+ port));


router.get('/', (req, res) => {
    res.json({ message: 'Funcionando!' });
});
                

router.get('/Lanche', (req, res) =>{
     execSQLQuery('SELECT * FROM LANCHE', res);
})

router.get('/Lanche/:Id?', (req, res) =>{
    let filter = '';
    if(req.params.Id) filter = ' WHERE IdLanche= \''  + parseInt(req.params.Id)+'\'';
    execSQLQuery('SELECT * FROM LANCHE' + filter, res);
})
router.get('/acompanhamento', (req, res) =>{
    execSQLQuery('SELECT * FROM ACOMPANHAMENTO', res);
})
router.get('/acompanhamento/:Id?', (req, res) =>{
    if(req.params.Id) filter = ' WHERE IdAcompanhamento= \''  + parseInt(req.params.Id)+'\'';
    execSQLQuery('SELECT * FROM ACOMPANHAMENTO' + filter, res);
})
router.get('/pedido/:IdLanche?/:IdAcompanhamento?', (req, res) => {
    let filter = '';
    if(req.params.IdLanche){ 
        filter += parseInt(req.params.IdLanche);
        if(req.params.IdAcompanhamento){ 
            filter+= ', ' + parseInt(req.params.IdAcompanhamento);
            execSQLQuery('exec sp_pedido '+ filter, res);
        }
    }
})