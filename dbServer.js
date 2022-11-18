require("dotenv").config()

const express = require("express")
const app = express()
const mysql = require("mysql")

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT

const db = mysql.createPool({
    connectionLimit: 100,
    host: DB_HOST,          // Localhost IP
    user: DB_USER,            // The SQL User created to connect the node app
    password: DB_PASSWORD,  // password for the new Sequel User
    database: DB_DATABASE,         // Name of Database we want to connect to
    port: DB_PORT                // Port number, the default value is used.
})

const port = process.env.PORT

app.listen(port,
    ()=> console.log(`Server Started on port ${port}`))

db.getConnection( (err, connection) => {
    process.on('uncaughtException',function(err){
        console.log(err);
    })
})