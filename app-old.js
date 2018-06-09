const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'content-Type': 'application/json' });
        let salida = {
            nombre: 'Julio',
            edad: 30,
            url: req.url
        };
        res.write(JSON.stringify(salida));
        // res.write('Hola mundo triste y enfermo');
        res.end();
    })
    .listen(1337);

console.log('Escuchando el puerto 8080');
// http.createServer((req, res) => {

//     res.write('Hola mundo');
//     res.end();

// }).listen(1337, '127.0.0.1');