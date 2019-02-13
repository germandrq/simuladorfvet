//Se requieren los complementos necesarios
const express = require('express')
const app = express()
const hbs = require('hbs');
const bodyParser = require('body-parser');
require('./hbs/helpers');
const MongoClient = require('mongodb').MongoClient;

const casos = require('./db/casos');
var db = require('./config/db');
var database = require('./functions/database');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//ENGINE HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

let port = 8080; //se defune el puerto
let casoactual = casos[1]; //hardcodeado

//conexion con mongoDB
MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err)
    db = database.db("simuladorfvet")
    app.listen(process.env.PORT || port, () => {
        console.log('We are live on ' + port);
    });
});
//renderizo las paginas
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

app.get('/simulador', async function(req, res) {
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

app.post('/simulador', async function(req, res) {
    let dificultad = req.query.dificultad;
    console.log(dificultad);
    await database.createNewUser(db, { id: 2 });
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

    //Acá podes agregar resultados, en base a variables

    //es decir:
    //resultadosX.push( casoactual.examenX[variable] ) siendo variable lo que te llega como parametro
    var resultadosSangre = [];
    for (let value of iterable) {
        resultadosSangre.push({
            name: value,
            value: casoactual.examenSangre[value]
        });
    }

    console.log(resultadosSangre);

    //Guardar resultadosX en bd, para poder levantarlos cuando se precise


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
        resultadosSangre: resultadosSangre
    });
})


//opcional generalizar resultadoX a resultados[X] siendo X el tipo de