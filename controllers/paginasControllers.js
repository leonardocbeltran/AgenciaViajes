import { Viaje } from '../models/viajes.js';
import { Testimoniales } from '../models/testimoniales.js';

const paginaInicio = async (req, res) => {

     // Realizar varias consultas a la vez

    const promiseDB = [];

    promiseDB.push( Viaje.findAll({ limit: 3 }) );
    promiseDB.push( Testimoniales.findAll({ limit: 3 }) );

    try {
        const resultado = await Promise.all(promiseDB);

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
};

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes = async (req, res) => {

    // Consultar base de Datos
    const viajes = await Viaje.findAll();

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
    });
};

const paginaTestimoniales = async (req, res) => {
    // Mostrar datos de la base de datos
    try {
        // Consultar base de Datos
       const testimoniales = await Testimoniales.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }



};

const infoViajes = async (req, res) => {

    const { slug } = req.params;

    try {
        // Consultar base de Datos
        const viajes = await Viaje.findOne({
            where: {
                slug
            }
        });

        res.render('infoViajes', {
            pagina: `${viajes.titulo}`,
            viajes
        });
    } catch (error) {
        console.log(error);
    }

};



export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    infoViajes
}