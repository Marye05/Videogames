const { Videogame } = require('../db');
 

const postVideogames = async ( req, res ) => {
    try {
        const postGame = await Videogame.create(req.body)
        await postGame.setGenres(req.body.genres)
        const dbGames = await Videogame.findAll({ where : { name : req.body.name } })
        res.status(200).json(dbGames)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

module.exports = postVideogames;


// POST | /videogames
// Esta ruta recibirá todos los datos necesarios para crear un videojuego y 
// relacionarlo con sus géneros solicitados.
// Toda la información debe ser recibida por body.
// Debe crear un videojuego en la base de datos, y 
// este debe estar relacionado con sus géneros indicados (al menos uno).


