const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const port = 18000;
const sql = require("mssql");
const connStr = "Server=regulus;User Id=BD16167;Password=BD16167;";
const router = express.Router();

sql.connect(connStr)
.then(conn => global.conn = conn)
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router);

function execSQLQuery(sqlQry, res){
    GLOBAL.conn.request()
               .query(sqlQry)
               .then(result => res.json(result.recordset))
               .catch(err => res.json(err));
}

app.listen(port, () => 
    console.log('API is running on port '+ port));

router.get('/monitor', (req, res) =>{
     execSQLQuery('SELECT * FROM Monitor', res);
})

router.get('/monitor/:ra?', (req, res) =>{
    let filter = '';
    if(req.params.ra) filter = ' WHERE raMonitor=' + parseInt(req.params.ra);
    execSQLQuery('SELECT FROM Monitor' + filter, res);
})
router.get('/horario', (req, res) =>{
    execSQLQuery('SELECT * FROM Horario', res);
})
router.get('/horarioMonitor', (req, res) =>{
    var string = 'SELECT M.raMonitor, M.nome, H.diaDaSemana, H.horario'+ 
                 'FROM MONITOR M, HORARIO H, HORARIO_MONITOR HM'+    
                  'WHERE HM.idHorario = H.idHorario and'+
                  'HM.raMonitor = M.raMonitor';
    execSQLQuery(string, res);
})
