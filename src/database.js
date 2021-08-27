import mongoose from "mongoose"

mongoose.connect('mongodb://localhost/graphqltest',{
    useNewUrlParser: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));