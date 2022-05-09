export interface INotificador{
    enviarMsg(destinatarios:string[],mensaje:string):void;

    validacionDestinatariosPorNotificador(destinatarios:string[]):boolean;

}