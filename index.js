"use strict";
exports.__esModule = true;
var GestionNotificador_1 = require("./GestionNotificador/GestionNotificador");
var Aplicacion = /** @class */ (function () {
    function Aplicacion() {
    }
    Aplicacion.prototype.ejecutar = function () {
        var destinarios = ["123456", "ssss", "124332", "elmo@gg.com"];
        var MediosNotificacion = ["S", "M"];
        var mensaje = "Holi al Elmoverse";
        var gestionNotificador = new GestionNotificador_1["default"](destinarios, MediosNotificacion, mensaje);
        gestionNotificador.enviarMensaje();
    };
    return Aplicacion;
}());
exports["default"] = Aplicacion;
var ejecutarS = function () {
    var aplicacion = new Aplicacion();
    aplicacion.ejecutar();
};
ejecutarS();
