import express from 'express';
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, infoViajes } from '../controllers/paginasControllers.js';
import { guardarTestimonial } from '../controllers/testimonialControllers.js';

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros)

router.get('/viajes', paginaViajes)

router.get('/testimoniales', paginaTestimoniales)
router.post('/testimoniales', guardarTestimonial)

router.get(`/viajes/:slug`, infoViajes)

export default router;

