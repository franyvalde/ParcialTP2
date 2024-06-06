import service from "../services/calificaciones.services.js"

const getDatosAlumnos = async (req, res) => {
    const calificaciones = await service.getDatosAlumnos()
    res.send(calificaciones)
}

const getDatosAlumno= async (req, res) => {
    const {id} = req.params
    const alumno = await service.getDatosAlumno(id)
    //Convertimos el number
    res.send(alumno)
}

const postCalificaciones = async (req, res) => {
    const{nombre, nota} = req.body

    const calificaciones = await service.postCalificaciones({nombre, nota})
    res.json(calificaciones)
}




export default {
    getDatosAlumnos,
    getDatosAlumno,
    postCalificaciones
}

