const {Schema, model} = require('mongoose')

const TaskScheme = Schema({
    title: {
        type: String,
        required: true
    },
    user: {
        type: String,
        ref: 'Usuario'
    }
},{
    toJSON: {
        virtual: true
    },
    toObject: {
        virtuals: true
    }
}
)

TaskScheme.method('toJSON', ()=>{
    const {__v, _id, ...object } = this.toObject()
    object.id = _id
    return object
})

module.exports = model('Task', TaskScheme)