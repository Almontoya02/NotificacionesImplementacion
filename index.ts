import GestionNotificador  from './GestionNotificador/GestionNotificador';

export default class Aplicacion{

    constructor(){}
    ejecutar(){
        let destinarios = ["123456","ssss","124332","elmo@gg.com"];
        let MediosNotificacion=["S","M"];
        let mensaje="Holi al Elmoverse"
    
        let gestionNotificador = new GestionNotificador(destinarios,MediosNotificacion,mensaje);
        gestionNotificador.enviarMensaje();
    }
    
}

const ejecutarS=()=>{
    let aplicacion = new Aplicacion();
    aplicacion.ejecutar()
}
ejecutarS();





