const { Videogame, Genre } = require('../db.js');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;

const getVideogamesById = async ( req, res ) => {
    try {
        // Si el id que me llega por props es un numero, lo busco en la API. Si no, lo busco en la DB.
        const { id } = req.params;
        if(!isNaN(id)){
            const game = await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
            res.status(200).json(game.data);
        }else{
            const game = await Videogame.findByPk(id,{
                include: [{
                    model:Genre,
                    attributes:['name'],
                    through:{
                        attributes:[]
                    }
                }]
            });
            console.log(game)
            res.status(200).json(game);
        }
    } catch (error) {
        res.status(400).send(error.message)
    }
    
}

module.exports = getVideogamesById;
// colocar de donde sale todo y verificar por tener errores



//GET | /videogames/:idVideogame
// Esta ruta obtiene el detalle de un videojuego específico. Es 
// decir que devuelve un objeto con la información pedida en el detalle de un videojuego.
// El videojuego es recibido por parámetro (ID).
// Tiene que incluir los datos del género del videojuego al que está asociado.
// Debe funcionar tanto para los videojuegos de la API como para los de la base de datos.