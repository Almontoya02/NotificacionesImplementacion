import { INotificador } from "./INotificador";

export default class Facebook implements INotificador {

    enviarMsg(destinatarios:string[],mensaje:string){
        let validationDestinatarios = this.validacionDestinatariosPorNotificador(destinatarios);

        if(validationDestinatarios){
            console.log("*********************************") 
            console.log("Enviando por medio de Facebook........")
            console.log("Su mensaje: ",mensaje);
            console.log("Ha sido enviado por medio de Facebook a los siguientes destinatarios: ");
            destinatarios.map((destinatario)=>{
                return console.log(destinatario)
            })
            console.log("*********************************") 
        }else{
            console.log("envio fallido por favor ingrese usuarios de facebook validos")
        }

    }

    validacionDestinatariosPorNotificador(destinatarios:string[]){
        let validation=true
        destinatarios.map((destinatario)=>{
            typeof destinatario==="string"?validation=true:validation=false
        })
        return validation;
    }
}