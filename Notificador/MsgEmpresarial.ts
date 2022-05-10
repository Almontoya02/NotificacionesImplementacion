import { INotificador } from "./INotificador";

export default class MsgEmpresarial implements INotificador {

    enviarMsg(destinatarios:string[],mensaje:string){

        console.log("*********************************")
        console.log("Enviando por medio de Email empresarial........")

            console.log("Su mensaje: ",mensaje);    
            console.log("Ha sido enviado por medio de MsgEmpresarial a los siguientes destinatarios: ");
            destinatarios.map((destinatario)=>{
                if(this.validacionDestinatariosPorNotificador(destinatario)){
                    console.log("Enviado a: ",destinatario)
                }else{
                    console.log("No se pudo enviar a:",destinatario," ya que no cumplió con la validación")
                }
            })
            console.log("*********************************")
            console.log("Revise que si sean emails correctos bro")

    }
    validacionDestinatariosPorNotificador(destinatario:string){
        let validation=false
        this.esCorreoElectronico(destinatario)?validation=true:validation=false;

        return validation
        
    }
    esCorreoElectronico = correoElectronico => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correoElectronico);

}