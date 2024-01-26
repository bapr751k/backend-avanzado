const express = require('express')
const router = express.Router()
const { getTareas, createTareas, updateTareas, deleteTareas } = require('../controllers/tareasControllers')

//router.route('/').get(getTareas).post(createTareas)
router.get('/', getTareas)
router.post('/', createTareas)

router.put('/:id', updateTareas)
router.delete('/:id', deleteTareas)

// Require controller modules.
module.exports = router
