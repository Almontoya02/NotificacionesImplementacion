import { INotificador } from "./INotificador";

export default class Sms implements INotificador {

    enviarMsg(destinatarios:string[],mensaje:string){
        console.log("*********************************");
        console.log("Enviando por medio de Mensaje de texto........")
        if(this.validacionDestinatariosPorNotificador(destinatarios)){
            console.log("Su mensaje: ",mensaje);
            console.log("Ha sido enviado por medio de Sms a los siguientes destinatarios: ");
            destinatarios.map((destinatario)=>{
                return console.log(destinatario)
            })
            console.log("*********************************") 
        }else{
            console.log("Para enviar msj deben los destinatarios deben ser números telefonicos, valide su información ingresada")
        }
        

    }
    validacionDestinatariosPorNotificador(destinatarios:string[]){
        let validation=true

        destinatarios.map((destinatario)=>{
            parseInt(destinatario)?validation=true:validation=false
        })
        return validation
    }
}