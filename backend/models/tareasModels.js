const mongoose = require ('mongoose')

const tareaSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },


    descripcion : {
        type:String,
        require: [true, 'por favor teclea una descripcion']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Tarea', tareaSchema)

