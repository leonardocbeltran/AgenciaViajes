import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';

const app = express();

// conectar la base de datos
db.authenticate()
    .then( () => console.log('base de datos conectada'))
    .catch(error => console.log(error));

// definir puerto
const port = process.env.PORT || 4000;

//Utilizar template pug
app.set('view engine', 'pug');

// nuestro propio middleware obtener el año actual
app.use((req, res, next) => {
    const year = new Date();
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';
    next();
})

// Agregar body parser para leer datos del formulario
app.use(express.urlencoded({extended:true}));

// definir carpeta publica
app.use(express.static('public'));

// Agregar router
app.use('/', router);


app.listen(port, () => {
    console.log(`servidor funcionando en puerto ${port}`);
});

