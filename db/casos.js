module.exports = {
    "1": {
        id: 1,
        name: "Obstruccion Instestino",
        datosPropietario: {
            ci: 43399220,
            nombreDueno: "Germán",
            direccion: "Lorenzo Fernandez 3192",
            dpto: "Montevideo",
            seccional: 13,
            pasaje: "No Corresponde",
            telefono: "099262662"
        },
        paciente: {
            especie: "Perro",
            raza: "Caniche",
            fechaNacimiento: "28 de Julio de 2017",
            sexo: "Macho",
            capa: "No se",
            nombre: "Chico",
            peso: "5 Kg"
        },
        analisis: {
            sangre: "Normal",
            ecografia: "https://player.vimeo.com/video/183849543",
            radiografia: "/anton/A_001.jpg",
            testimoniodueno: 30,
            estadopiel: "bueno",
            orina: "alterada"
        },
        puntaje: {
            sangre: 1,
            ecografia: -1,
            radiografia: 0,
            testimoniodueno: 1,
            estadopiel: 0,
            orina: 1,
        }
    },
    "2": {
        id: 2,
        name: "Tumor",
        analisis: {
            sangre: "Normal",
            ecografia: "img_a001.jpg",
            radiografia: "/anton/A_001.jpg",
            testimoniodueno: 30,
            estadopiel: "bueno"
        },
        puntaje: {
            sangre: 1,
            ecografia: -1,
            radiografia: 0,
            testimoniodueno: 1,
            estadopiel: 0
        }
    }
}