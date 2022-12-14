import { Testimoniales } from '../models/testimoniales.js';

const guardarTestimonial = async (req, res) => {

    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre.trim()===''){
        errores.push({ mensaje: 'El nombre esta vacio' });
    }

    if(correo.trim()===''){
        errores.push({ mensaje: 'El Correo electrónico esta vacio' });
    }

    if(mensaje.trim()===''){
        errores.push({ mensaje:'El Mensaje esta vacio' });
    }

    if(errores.length > 0){
        // consultar testimoniales
        const testimoniales = await Testimoniales.findAll();

        // Mostrar vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            testimoniales,
            nombre,
            correo,
            mensaje
        })
    return;
    }

    // almacenar en base de datos
    try {
         // Guardar en base de datos con sequelize
         await Testimoniales.create({
            nombre,
            correo,
            mensaje
         })
         res.redirect('/testimoniales')

    } catch (error) {
        console.log(error);        
    }
   

};


export {
    guardarTestimonial
}