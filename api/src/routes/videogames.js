const { Router } = require('express')
const getVideogames = require('../controllers/getVideogames.js')
const postVideogames = require('../controllers/postVideogames.js')
const getVideogamesById = require('../controllers/getVideogamesById.js')
const getVideogamesName = require('../controllers/getVideogamesName.js')


const router = Router()

router.get('/', getVideogamesName, getVideogames)

router.post('/', postVideogames)

router.get('/:id', getVideogamesById)

module.exports = router;