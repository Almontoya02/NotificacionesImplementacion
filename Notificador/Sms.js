"use strict";
exports.__esModule = true;
var Sms = /** @class */ (function () {
    function Sms() {
    }
    Sms.prototype.enviarMsg = function (destinatarios, mensaje) {
        console.log("*********************************");
        console.log("Enviando por medio de Email empresarial........");
        if (this.validacionDestinatariosPorNotificador(destinatarios)) {
            console.log("Su mensaje: ", mensaje);
            console.log("Ha sido enviado por medio de Sms a los siguientes destinatarios: ");
            destinatarios.map(function (destinatario) {
                return console.log(destinatario);
            });
            console.log("*********************************");
        }
        else {
            console.log("Para enviar msj deben los destinatarios deben ser números telefonicos, valide su información ingresada");
        }
    };
    Sms.prototype.validacionDestinatariosPorNotificador = function (destinatarios) {
        var validation = true;
        destinatarios.map(function (destinatario) {
            parseInt(destinatario) ? validation = true : validation = false;
        });
        return validation;
    };
    return Sms;
}());
exports["default"] = Sms;
