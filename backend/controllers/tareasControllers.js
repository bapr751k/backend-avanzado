const getTareas = (req, res) => {
    res.status(200).json({ mensajes: 'Get Tareas' })
}

const createTareas = (req, res) => {
    res.status(201).json( {mensajes: 'Create Tareas' })
}

const updateTareas = (req, res) => {
    res.status(200).json({ mensajes: `Modificar la tarea con id ${req.params.id}` })
}

const deleteTareas = (req, res) => {
    res.status(200).json({ id: req.params.id })
}

module.exports ={
    getTareas,
    createTareas,
    updateTareas,
    deleteTareas
}