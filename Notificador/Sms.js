"use strict";
exports.__esModule = true;
var Sms = /** @class */ (function () {
    function Sms() {
    }
    Sms.prototype.enviarMsg = function (destinatarios, mensaje) {
        var _this = this;
        console.log("*********************************");
        console.log("Enviando por medio de Mensaje de texto........");
        console.log("Su mensaje: ", mensaje);
        console.log("Ha sido enviado por medio de Sms a los siguientes destinatarios: ");
        destinatarios.map(function (destinatario) {
            if (_this.validacionDestinatariosPorNotificador(destinatario)) {
                console.log("Enviado a: ", destinatario);
            }
            else {
                console.log("No se pudo enviar a:", destinatario, " ya que no cumplió con la validación");
            }
        });
        console.log("*********************************");
    };
    Sms.prototype.validacionDestinatariosPorNotificador = function (destinatario) {
        var validation = true;
        parseInt(destinatario) ? validation = true : validation = false;
        return validation;
    };
    return Sms;
}());
exports["default"] = Sms;
