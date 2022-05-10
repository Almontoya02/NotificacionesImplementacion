"use strict";
exports.__esModule = true;
exports.Aplication = void 0;
var GestionNotificador_1 = require("./GestionNotificador/GestionNotificador");
var Aplication = function () {
    var destinarios = ["123456", "ssss", "124332"];
    var MediosNotificacion = ["S", "M", "F"];
    var mensaje = "Holi al Elmoverse";
    var gestionNotificador = new GestionNotificador_1["default"](destinarios, MediosNotificacion, mensaje);
    gestionNotificador.enviarMsg();
};
exports.Aplication = Aplication;
(0, exports.Aplication)();
