import { INotificador } from "./INotificador";

export default class Sms implements INotificador {

    enviarMsg(destinatarios:string[],mensaje:string){
        console.log("*********************************");
        console.log("Enviando por medio de Mensaje de texto........")
            console.log("Su mensaje: ",mensaje);
            console.log("Ha sido enviado por medio de Sms a los siguientes destinatarios: ");
            destinatarios.map((destinatario)=>{
                if(this.validacionDestinatariosPorNotificador(destinatario)){
                    console.log("Enviado a: ",destinatario)
                }else{
                    console.log("No se pudo enviar a:",destinatario," ya que no cumplió con la validación")
                }

            })
            console.log("*********************************") 

        

    }
    validacionDestinatariosPorNotificador(destinatario:string){
        let validation=true
        parseInt(destinatario)?validation=true:validation=false

        return validation
    }
}