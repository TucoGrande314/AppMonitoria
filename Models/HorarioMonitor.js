module.exports = class HorarioMonitor
{
    constructor(id, idHorario, idMonitor){
        this.id = id;
        this.idHorario = idHorario;
        this.idMonitor = idMonitor;
    }
    constructor(){

    }
    get id(){
        return this.id;
    }
    get idHorario(){
        return this.idHorario;
    }
    get idMonitor(){
        return this.idMonitor;
    }
    set id(id){
        this.id = id;
    }
    set idHorario(idHorario){
        this.idHorario = idHorario;
    }
    set idMonitor(idMonitor){
        this.idMonitor = idMonitor;
    }
}