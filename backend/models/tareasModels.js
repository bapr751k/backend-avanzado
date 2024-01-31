const mongoose = require ('mongoose')

const tareaSchema = mongoose.Schema({
    descripcion : {
        type:String,
        require: [true, 'por favor teclea una descripcion']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Tarea', tareaSchema)

