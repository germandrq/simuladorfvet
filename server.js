const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');
const casos = require('./db/casos');
const baseurl = 'http://localhost:8080';
app.use(express.static(__dirname + '/public'));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//ENGINE HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

let casoactual = casos[1];

app.get('/', function(req, res) {
    res.render('home', {
        nombre: 'germán',
    });
});
app.get('/comienzo', function(req, res) {
    res.render('comienzo');
});

app.get('/diagnostico', function(req, res) {
    res.render('diagnostico');
});

app.get('/simulador', function(req, res) {
    res.render('simulador', { valorsangre: casoactual.analisis.sangre, valororina: casoactual.analisis.orina, valorecografia: casoactual.analisis.ecografia, });
});

app.listen(8080, () => {
    console.log('Escuchando en el puerto 8080');
});

app.get('/simulador', function(req, res) {
    //if dificultad seleccionada es igual a x entonces let casoactual = casoFacil[valor aleatorio]
    res.render('simulador', {
        ci: casoactual.datosPropietario.ci,
        nombreDueno: casoactual.datosPropietario.nombreDueno,
        direccion: casoactual.datosPropietario.direccion,
        depto: casoactual.datosPropietario.dpto,
        seccional: casoactual.datosPropietario.seccional,
        pasaje: casoactual.datosPropietario.pasaje,
        telefono: casoactual.datosPropietario.telefono,
        especie: casoactual.paciente.especie,
        raza: casoactual.paciente.raza,
        fechaNacimiento: casoactual.paciente.fechaNacimiento,
        sexo: casoactual.paciente.sexo,
        capa: casoactual.paciente.capa,
        nombreAnimal: casoactual.paciente.nombre,
        peso: casoactual.paciente.peso,
        motivoConsulta: casoactual.motivoConsulta,
        valorsangre: casoactual.analisis.sangre,
        valororina: casoactual.analisis.orina,
        valorecografia: casoactual.analisis.ecografia,
    });
});

app.post('/simulador', function(req, res) {
    console.log(req.body);
    res.render('simulador', {
        ci: casoactual.datosPropietario.ci,
        nombreDueno: casoactual.datosPropietario.nombreDueno,
        direccion: casoactual.datosPropietario.direccion,
        dpto: casoactual.datosPropietario.dpto,
        seccional: casoactual.datosPropietario.seccional,
        pasaje: casoactual.datosPropietario.pasaje,
        telefono: casoactual.datosPropietario.telefono,
        especie: casoactual.paciente.especie,
        raza: casoactual.paciente.raza,
        fechaNacimiento: casoactual.paciente.fechaNacimiento,
        sexo: casoactual.paciente.sexo,
        capa: casoactual.paciente.capa,
        nombreAnimal: casoactual.paciente.nombre,
        peso: casoactual.paciente.peso,
        motivoConsulta: casoactual.motivoConsulta,
        valorsangre: casoactual.analisis.sangre,
        valororina: casoactual.analisis.orina,
        valorecografia: casoactual.analisis.ecografia,
    });
})

app.get('/solicituddatos', function(req, res) {
    //console.log(req.body);
    res.render('simulador', {
        ci: casoactual.datosPropietario.ci,
        nombreDueno: casoactual.datosPropietario.nombreDueno,
        direccion: casoactual.datosPropietario.direccion,
        dpto: casoactual.datosPropietario.dpto,
        seccional: casoactual.datosPropietario.seccional,
        pasaje: casoactual.datosPropietario.pasaje,
        telefono: casoactual.datosPropietario.telefono,
        especie: casoactual.paciente.especie,
        raza: casoactual.paciente.raza,
        fechaNacimiento: casoactual.paciente.fechaNacimiento,
        sexo: casoactual.paciente.sexo,
        capa: casoactual.paciente.capa,
        nombreAnimal: casoactual.paciente.nombre,
        peso: casoactual.paciente.peso,
        motivoConsulta: casoactual.motivoConsulta,
        valorsangre: casoactual.analisis.sangre,
        valororina: casoactual.analisis.orina,
        valorecografia: casoactual.analisis.ecografia,
        valorHemograma: "nofunciona",
    });
})

app.post('/solicituddatos', function(req, res) {
    let iterable = req.body.examenSangre;
    var valorHemograma1 = "";
    var valorGlicemia = "";
    var valorColesterol = "";
    for (const value of iterable) {
        console.log(value);
        if (value == "hemograma")
            var valorHemograma1 = casoactual.examenSangre.hemograma;
        else if (value == "glicemia")
            valorGlicemia = casoactual.examenSangre.glicemia;
        else if (value == "colesterol")
            valorColesterol = casoactual.examenSangre.colesterol;
        //comprobar si es hemograma> cargarlo y renderizarlo asi con todos los iterables
        //aca le cargo con el valor correspondiente a la base de datos para el resultado final
        //escribir en un json o mongo para despues solo llamar al objeto con todas las variables que fui agregando, 
    }
    //for (const value of iterable) {
    //console.log(value);
    //}
    res.render('simulador', {
        ci: casoactual.datosPropietario.ci,
        nombreDueno: casoactual.datosPropietario.nombreDueno,
        direccion: casoactual.datosPropietario.direccion,
        dpto: casoactual.datosPropietario.dpto,
        seccional: casoactual.datosPropietario.seccional,
        pasaje: casoactual.datosPropietario.pasaje,
        telefono: casoactual.datosPropietario.telefono,
        especie: casoactual.paciente.especie,
        raza: casoactual.paciente.raza,
        fechaNacimiento: casoactual.paciente.fechaNacimiento,
        sexo: casoactual.paciente.sexo,
        capa: casoactual.paciente.capa,
        nombreAnimal: casoactual.paciente.nombre,
        peso: casoactual.paciente.peso,
        motivoConsulta: casoactual.motivoConsulta,
        valorsangre: casoactual.analisis.sangre,
        valororina: casoactual.analisis.orina,
        valorecografia: casoactual.analisis.ecografia,
        valorHemograma: valorHemograma1,
        valorGlicemia: valorGlicemia,
        valorColesterol: valorColesterol,
    });
})