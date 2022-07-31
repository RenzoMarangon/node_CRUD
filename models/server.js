const cors = require('cors')
const express = require('express');
const bodyParser = require('body-parser');
const { dbConnection } = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;     

        //MONGOOSE
        dbConnection()

        //MIDDLEWARES
        this.middlewares();

        //ROUTES
        this.routes();
    }



    middlewares() {
        //CORS
        this.app.use( cors() );            

        //Lectura y <parseo del body
        this.app.use( bodyParser.json() );
        this.app.use(bodyParser.urlencoded({ extended: false }));
        

        //Pagina publica
        this.app.use( express.static('public') );
    }

    routes(){

        this.app.use('/api/users',require('../routes/users'));

    }

    listen(){
        this.app.listen( this.port, ()=>{
            console.log(`Server listening port ${ this.port }`)
        })
    }
}


module.exports = Server;