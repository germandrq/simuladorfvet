module.exports = {
    "1": {
        id: 1,
        name: "Obstruccion Instestino",
        gradoDificultad: 1,
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
        motivoConsulta: "El Perro esta muy decaido, no quiere comer y vomita.",
        anamnesis: {
            sanitaria: "Lorem ipsum dolor sit amet, consectetur adipisici elit",
            ambiental: "Lorem ipsum dolor sit amet, consectetur adipisici elit",
        },
        remota: {
            fisiologicaRemota: "Lorem ipsum dolor sit amet, consectetur adipisici elit",
            patologicaRemota: "Lorem ipsum dolor sit amet, consectetur adipisici elit",
        },
        proxima: {
            fisiologicaProxima: "Lorem ipsum dolor sit amet, consectetur adipisici elit",
            patologicaProxima: "Lorem ipsum dolor sit amet, consectetur adipisici elit",
        },
        examenObjetivoGeneral: {
            temperatura: 37,
            pulso: 80,
            respiracion: 26,
            estadoCarnes: "Normal",
            sensorio: "Normal",
            facies: "Normal",
            gangliosLinfaticos: "Normal",
            pielSubcutaneo: "Normal",
            mucosas: "Normal",
            grandesFunciones: "Normal",
        },
        examenObjetivoParticular: "Normal",
        examenSangre: {
            hemograma: "Sin particularidades",
            glicemia: 30,
            colesterol: 1.5,
            perfilEpatico: 0.5,
            got: 120,
            gpt: 8,
            trigliceridos: 8,
            perfilRenal: 2,
            coprofuncional: 3,
            perfilMuscular: 21,
            fas: 3,
            testSangreOculta: "Negativo",
            perfilRendimiento: "Positivo",
            ggt: 4,
            orinaCompleta: [1, 2, 3],
            proteinasTotales: 40,
            albumina: 3,
            acbiliares: 2,
        },
        rayosX: {
            pataTraseraDerecha: "https://image.freepik.com/foto-gratis/pelicula-rayos-x-vista-lateral-perro-cerrada-estandar-torax-abdomen_41775-31.jpg",
            pataTraseraIzquierda: "https://image.freepik.com/foto-gratis/pelicula-rayos-x-vista-lateral-perro-cerrada-estandar-torax-abdomen_41775-31.jpg",
            pataDelanteraDerecha: "https://image.freepik.com/foto-gratis/pelicula-rayos-x-vista-lateral-perro-cerrada-estandar-torax-abdomen_41775-31.jpg",
            pataDelanteraIzquierda: "https://image.freepik.com/foto-gratis/pelicula-rayos-x-vista-lateral-perro-cerrada-estandar-torax-abdomen_41775-31.jpg",
            craneo: "https://image.freepik.com/foto-gratis/pelicula-rayos-x-vista-lateral-perro-cerrada-estandar-torax-abdomen_41775-31.jpg",
            cadera: "https://image.freepik.com/foto-gratis/pelicula-rayos-x-vista-lateral-perro-cerrada-estandar-torax-abdomen_41775-31.jpg",
            torax: "https://image.freepik.com/foto-gratis/pelicula-rayos-x-vista-lateral-perro-cerrada-estandar-torax-abdomen_41775-31.jpg",
            abdomen: "https://image.freepik.com/foto-gratis/pelicula-rayos-x-vista-lateral-perro-cerrada-estandar-torax-abdomen_41775-31.jpg",
        },
        ecografia: {
            urinario: "https://player.vimeo.com/video/39738099",
            genital: "https://player.vimeo.com/video/39738099",
        },
        endoscopia: {
            digestivo: "https://youtu.be/O-kOIb-yq88",
            respiratorio: "https://youtu.be/O-kOIb-yq88",
        },
        anatomiaPatologica: {
            biopsia: "http://www.citopatveterinaria.com/wp-content/uploads/2014/09/scombrox.png",
            citologia: "http://www.citopatveterinaria.com/wp-content/uploads/2014/09/citologia1.jpg",
            pcr: "http://www.citopatveterinaria.com/wp-content/uploads/2014/09/pcr.jpg",
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