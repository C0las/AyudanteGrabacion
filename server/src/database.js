import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://Works:casita123@cluster0.ffazg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true

})
    .then(db => console.log('db está conectada'))
    .catch(error => console.log(error))