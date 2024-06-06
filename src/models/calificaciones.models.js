const calificaciones = [
    {
        id: "1",
        nombre: "Jorge",
        nota: 8,
    },
    {
        id: "2",
        nombre: "Roberto",
        nota: 10,
    }
]

const getDatosAlumnos = async () => {
    return calificaciones
}

const getDatosAlumno = async (id) => {
    const alumno = calificaciones.find((element) => element.id == id);
    return alumno || "alumno inexistente."
}

const postCalificaciones = async (data) => {
    console.log('DATA: ', data)
    data.id = calificaciones.length + 1;
    await calificaciones.push(data)
    return data
}



export default {
    getDatosAlumnos,
    getDatosAlumno,
    postCalificaciones
}