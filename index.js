import express from 'express';

const server = express();
const port = process.env.PORT || 4000;


// Middleware
server.use(express.json());

// Routes
server.get('/', (req, res) => {
    res.send('Hola mundo');

});

server.post('/', (req, res) => {
    let nombre = req.body.nombre
    res.send(`Hola ${nombre}`);

});

server.listen(port, ()=> {
    console.log(`Puerto iniciado en ${port}`);

});