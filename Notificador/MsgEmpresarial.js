"use strict";
exports.__esModule = true;
var MsgEmpresarial = /** @class */ (function () {
    function MsgEmpresarial() {
        this.esCorreoElectronico = function (correoElectronico) { return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correoElectronico); };
    }
    MsgEmpresarial.prototype.enviarMsg = function (destinatarios, mensaje) {
        var validation = this.validacionDestinatariosPorNotificador(destinatarios);
        console.log("*********************************");
        console.log("Enviando por medio de Email empresarial........");
        if (validation) {
            console.log("Su mensaje: ", mensaje);
            console.log("Ha sido enviado por medio de MsgEmpresarial a los siguientes destinatarios: ");
            destinatarios.map(function (destinatario) {
                return console.log(destinatario);
            });
            console.log("*********************************");
        }
        else {
            console.log("Revise que si sean emails correctos bro");
        }
    };
    MsgEmpresarial.prototype.validacionDestinatariosPorNotificador = function (destinatarios) {
        var _this = this;
        var validation = false;
        destinatarios.map(function (destinatario) {
            _this.esCorreoElectronico(destinatario) ? validation = true : validation = false;
        });
        return validation;
    };
    return MsgEmpresarial;
}());
exports["default"] = MsgEmpresarial;
