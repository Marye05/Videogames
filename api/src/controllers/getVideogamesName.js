const { Videogame, Genre } = require('../db.js');
const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Op } = require('sequelize')

const getVideogamesName = async ( req, res, next ) => {
    const { name } = req.query
    // si no es el nombre, traeme el siguiente
    if(!name) return next();
    try {
        // quiero q me traigas todos videogames 
        const gameByNameDb = await Videogame.findAll({
            where:{
                name:{
                    // operador op, filtramos por nombre todos los videogames por nombre
                    // nos va ayudar a comparar a buscar valores parecidos al nombre
                    // me va a encontrar el nombre como yo lo escriba
                    // nos va ayudar en la barra de busquedad
                    [Op.iLike]:`%${name}%`
                }
            },
            attributes:['id','name','background_image'],
            include: [{
                model:Genre,
                attributes:['name'],
                through:{
                    attributes:[]
                }
            }]
        })
        const gameByNameApi = await axios(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`);
        const response = [ ...gameByNameDb, ...gameByNameApi.data.results.map( game => {
            return {
                id: game.id,
                name: game.name,
                background_image: game.background_image,
                genres: game.genres.map(genre => {
                    return {
                        name: genre.name
                    }
                })
        }
        }) ].slice(0,15)
        
        res.status(200).json(response)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = getVideogamesName;
// colocar notas de donde salio todo y verificar por tener errores

// GET | /videogames/name?="..."
// Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query.
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe el videojuego, debe mostrar un mensaje adecuado.
// Debe buscar tanto los de la API como los de la base de datos.
