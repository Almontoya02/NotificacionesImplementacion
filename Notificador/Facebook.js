"use strict";
exports.__esModule = true;
var Facebook = /** @class */ (function () {
    function Facebook() {
    }
    Facebook.prototype.enviarMsg = function (destinatarios, mensaje) {
        var validationDestinatarios = this.validacionDestinatariosPorNotificador(destinatarios);
        if (validationDestinatarios) {
            console.log("*********************************");
            console.log("Enviando por medio de Facebook........");
            console.log("Su mensaje: ", mensaje);
            console.log("Ha sido enviado por medio de Facebook a los siguientes destinatarios: ");
            destinatarios.map(function (destinatario) {
                return console.log(destinatario);
            });
            console.log("*********************************");
        }
        else {
            console.log("envio fallido por favor ingrese usuarios de facebook validos");
        }
    };
    Facebook.prototype.validacionDestinatariosPorNotificador = function (destinatarios) {
        var validation = true;
        destinatarios.map(function (destinatario) {
            typeof destinatario === "string" ? validation = true : validation = false;
        });
        return validation;
    };
    return Facebook;
}());
exports["default"] = Facebook;
