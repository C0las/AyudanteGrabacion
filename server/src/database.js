import mongoose from 'mongoose'

mongoose.connect("mongodb://localhost/ayudantegrabaciondb",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('db está conectada'))
    .catch(error => console.log(error))