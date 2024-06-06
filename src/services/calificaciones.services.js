import model from "../models/calificaciones.models.js"

const getDatosAlumnos = async () => {
    const calificaciones = await model.getDatosAlumnos()
    return calificaciones
}

const getDatosAlumno = async (id) => {
    const alumno = await model.getDatosAlumno(id)
    return alumno
}

const postCalificaciones = async (data) => {
    const calificaciones = await model.postCalificaciones(data)
    return calificaciones
}



export default {
    getDatosAlumnos,
    getDatosAlumno,
    postCalificaciones
}