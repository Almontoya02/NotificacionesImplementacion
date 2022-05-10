

import GestionNotificador  from './GestionNotificador/GestionNotificador';

export const Aplication = () => {
    let destinarios = ["123456","ssss","124332"];
    let MediosNotificacion=["S","M","F"];
    let mensaje="Holi al Elmoverse"

    let gestionNotificador = new GestionNotificador(destinarios,MediosNotificacion,mensaje);
    gestionNotificador.enviarMsg();

}

Aplication();


