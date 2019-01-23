const express = require('express')
const app = express()
const hbs = require('hbs');
require('./hbs/helpers');
const casos = require('./db/casos');
const baseurl = 'http://localhost:8080';
app.use(express.static(__dirname + '/public'));

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

app.get('/simulador', function(req, res) {
    res.render('simulador', { valorsangre: casoactual.analisis.sangre, valororina: casoactual.analisis.orina, valorecografia: casoactual.analisis.ecografia, });
});

app.listen(8080, () => {
    console.log('Escuchando en el puerto 8080');
});