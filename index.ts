import GestionNotificador  from './GestionNotificador/GestionNotificador';

export default class Aplicacion{

    constructor(){}
    ejecutar(){
        let destinarios = ["123456","ssss","124332","elmochupon@gg.com"];
        let MediosNotificacion=["S","F"];
        let mensaje="Holi al Elmoverse"
    
        let gestionNotificador = new GestionNotificador(destinarios,MediosNotificacion,mensaje);
        gestionNotificador.enviarMsg();
    }
    
}

const ejecutarS=()=>{
    let aplicacion = new Aplicacion();
    aplicacion.ejecutar()
}
ejecutarS();





