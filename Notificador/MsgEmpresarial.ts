import { INotificador } from "./INotificador";

export default class MsgEmpresarial implements INotificador {

    enviarMsg(destinatarios:string[],mensaje:string){
        let validation = this.validacionDestinatariosPorNotificador(destinatarios);
        console.log("*********************************")
        console.log("Enviando por medio de Email empresarial........")
        if(validation){
            console.log("Su mensaje: ",mensaje);    
            console.log("Ha sido enviado por medio de MsgEmpresarial a los siguientes destinatarios: ");
            destinatarios.map((destinatario)=>{
                return console.log(destinatario)
            })
            console.log("*********************************")
        }else{
            console.log("Revise que si sean emails correctos bro")
        }
    }
    validacionDestinatariosPorNotificador(destinatarios:string[]){
        let validation=false

        destinatarios.map((destinatario)=>{
            this.esCorreoElectronico(destinatario)?validation=true:validation=false;
        })
        return validation
        
    }
    esCorreoElectronico = correoElectronico => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correoElectronico);

}