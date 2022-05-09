
import { INotificador } from './../Notificador/INotificador';
import Facebook from './../Notificador/Facebook';
import MsgEmpresarial from './../Notificador/MsgEmpresarial';
import Sms from './../Notificador/Sms';

export default class GestionNotificador{
    destinarios:string[]; 
    MediosNotificacion:string[];
    msj:string;

    constructor(destinatarios:string[],MediosNotificacion:string[],msj:string){
        this.destinarios=destinatarios;
        this.msj=msj;
        this.MediosNotificacion=MediosNotificacion;
    }

    enviarMsg(){

        for (let index = 0; index < this.MediosNotificacion.length; index++) {
            switch (this.MediosNotificacion[index]) {
                case "F":
                    let Face:INotificador = new Facebook();
                    Face.enviarMsg(this.destinarios,this.msj);
                    break;
                case "M":
                    let EmailEmpresarial:INotificador = new MsgEmpresarial();
                    EmailEmpresarial.enviarMsg(this.destinarios,this.msj);
                    break;
                case "S":
                    let sms:INotificador = new Sms();
                    sms.enviarMsg(this.destinarios,this.msj);
                    break;
                default:
                    console.log("No te entiendo compa")
                    break;
            }
        
        }
    }

        /**this.MediosNotificacion.forEach(notificacion => {

            switch (notificacion) {
                case "F":
                    let Face:INotificador = new Facebook();
                    Face.enviarMsg(this.destinarios,this.msj);
                case "M":
                    let EmailEmpresarial:INotificador = new MsgEmpresarial();
                    EmailEmpresarial.enviarMsg(this.destinarios,this.msj);
                case "S":
                    let sms:INotificador = new Sms();
                    sms.enviarMsg(this.destinarios,this.msj);
                default:
                    console.log("No te entiendo compa")
            }
        });*/
}
