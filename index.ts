

import GestionNotificador  from './GestionNotificador/GestionNotificador';

export const Aplication = () => {
    let destinarios = ["123456"];
    let MediosNotificacion=["S"];
    let mensaje="Holi al Elmoverse"

    let gestionNotificador = new GestionNotificador(destinarios,MediosNotificacion,mensaje);
    gestionNotificador.enviarMsg();

}

Aplication();


