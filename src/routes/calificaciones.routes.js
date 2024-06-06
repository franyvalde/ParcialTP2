import express from 'express'
import controller from '../controllers/calificaciones.controller.js'

const router = express.Router()

//Toda la informacion
router.get("/calificaciones", controller.getDatosAlumnos)
//un solo alumno
router.get("/calificaciones/:id", controller.getDatosAlumno)
//calificaciones
router.post("/calificaciones", controller.postCalificaciones)

export default router