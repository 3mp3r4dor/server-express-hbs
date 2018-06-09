const express = require('express');
const app = express();

var hbs = require('hbs');

require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;

// Express
app.use(express.static(__dirname + '/public'));
// Handlebars AKA EXPRESS HBK
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Julio'
    });
});

app.get('/about', (req, res) => {

    res.render('about');
});


app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});