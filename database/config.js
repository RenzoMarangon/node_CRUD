const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
       await mongoose
        .connect( process.env.PORT )
        .then( ()=>{
            console.log('db online')
        })
        

    } catch (error) {
        console.log(error)
        throw new Error('Error al iniciar la Base de datos')
    }

};

module.exports = {
    dbConnection
}