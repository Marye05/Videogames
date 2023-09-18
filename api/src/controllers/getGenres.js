const axios = require('axios');
require('dotenv').config();
const { API_KEY } = process.env;
const { Genre } = require('../db.js')

const getGenres = async ( req, res ) => {
    try {
        // Buscar todos los generos existentes con findAll, este metodo retorna una promesa
        const db = await Genre.findAll();
        // Si no hay nada, pido los generos de la API y los guardo en db
        if(db.length === 0){
            const resp = await axios(`https://api.rawg.io/api/genres?key=${API_KEY}`);
            
            const genresMap = resp.data.results.map( gen => {
                return {
                    id : gen.id,
                    name : gen.name
                }} );    
            await Genre.bulkCreate(genresMap);
            // Retorno el array con los generos y si ya estaban en la db, entonces retorno el resultado de la busqueda
            res.status(200).json(genresMap)    
            }else{
            return res.status(200).json(db)    
            }
    } catch (error) {
        res.status(404).send(error.message)
    }
}


// GET | /genres
// Obtiene un arreglo con todos los géneros existentes de la API.
// En una primera instancia, cuando la base de datos este vacía, 
// deberás guardar todos los géneros que encuentres en la API.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). 
// Luego de obtenerlos de la API, 
// deben ser guardados en la base de datos para su posterior consumo desde allí.

module.exports = getGenres;

