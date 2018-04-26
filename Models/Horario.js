module.exports = class Horario
{
    constructor(id, diaDaSemana, horario){
        this.id = id;
        this.diaDaSemana = diaDaSemana;
        this.horario = horario;
    }
    constructor(){

    }
    get id(){
        return this.id;
    }
    get diaDaSemana(){
        return this.diaDaSemana;
    }
    get horario(){
        return this.horario;
    }
    set id(id){
        this.id = id;
    }
    set diaDaSemana(){
        this.diaDaSemana = diaDaSemana;
    }
    set horario(){
        this.horario = horario;
    }
}