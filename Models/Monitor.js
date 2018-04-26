module.exports = class Monitor
{
    constructor(ra, nome){
        this.ra = ra;
        this.nome = nome;
    }
    constructor(){

    }
    get ra(){
        return this.ra;
    }
    get nome(){
        return this.nome;
    }
    set ra(ra){
        this.ra = ra;
    }
    set nome(nome){
        this.nome = nome
    }
}