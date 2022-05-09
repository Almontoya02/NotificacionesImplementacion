"use strict";
exports.__esModule = true;
var Facebook_1 = require("./../Notificador/Facebook");
var MsgEmpresarial_1 = require("./../Notificador/MsgEmpresarial");
var Sms_1 = require("./../Notificador/Sms");
var GestionNotificador = /** @class */ (function () {
    function GestionNotificador(destinatarios, MediosNotificacion, msj) {
        this.destinarios = destinatarios;
        this.msj = msj;
        this.MediosNotificacion = MediosNotificacion;
    }
    GestionNotificador.prototype.enviarMsg = function () {
        for (var index = 0; index < this.MediosNotificacion.length; index++) {
            switch (this.MediosNotificacion[index]) {
                case "F":
                    var Face = new Facebook_1["default"]();
                    Face.enviarMsg(this.destinarios, this.msj);
                    break;
                case "M":
                    var EmailEmpresarial = new MsgEmpresarial_1["default"]();
                    EmailEmpresarial.enviarMsg(this.destinarios, this.msj);
                    break;
                case "S":
                    var sms = new Sms_1["default"]();
                    sms.enviarMsg(this.destinarios, this.msj);
                    break;
                default:
                    console.log("No te entiendo compa");
                    break;
            }
        }
    };
    return GestionNotificador;
}());
exports["default"] = GestionNotificador;
