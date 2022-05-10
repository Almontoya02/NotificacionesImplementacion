"use strict";
exports.__esModule = true;
var MsgEmpresarial = /** @class */ (function () {
    function MsgEmpresarial() {
        this.esCorreoElectronico = function (correoElectronico) { return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correoElectronico); };
    }
    MsgEmpresarial.prototype.enviarMsg = function (destinatarios, mensaje) {
        var _this = this;
        console.log("*********************************");
        console.log("Enviando por medio de Email empresarial........");
        console.log("Su mensaje: ", mensaje);
        console.log("Ha sido enviado por medio de MsgEmpresarial a los siguientes destinatarios: ");
        destinatarios.map(function (destinatario) {
            if (_this.validacionDestinatariosPorNotificador(destinatario)) {
                console.log("Enviado a: ", destinatario);
            }
            else {
                console.log("No se pudo enviar a:", destinatario, " ya que no cumplió con la validación");
            }
        });
        console.log("*********************************");
        console.log("Revise que si sean emails correctos bro");
    };
    MsgEmpresarial.prototype.validacionDestinatariosPorNotificador = function (destinatario) {
        var validation = false;
        this.esCorreoElectronico(destinatario) ? validation = true : validation = false;
        return validation;
    };
    return MsgEmpresarial;
}());
exports["default"] = MsgEmpresarial;
