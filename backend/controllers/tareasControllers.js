const asyncHandler = require('express-async-handler')

const getTareas = async (req, res) => {
    res.status(200).json({ mensajes: 'Get Tareas' })
}

const createTareas = asyncHandler( async (req, res) => {
    if(!req.body.desripcion){
        res.status(400)
        throw new Error('Por favor teclea una descripción')
    }
    
    res.status(201).json( {mensajes: 'Create Tareas' })
}
)

const updateTareas = asyncHandler( async (req, res) => {
    res.status(200).json({ mensajes: `Modificar la tarea con id ${req.params.id}` })
}
)

const deleteTareas = asyncHandler( async (req, res) => {
    res.status(200).json({ id: req.params.id })
}
)

module.exports ={
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}
