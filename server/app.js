import express from 'express';
import dotenv from "dotenv" 


dotenv.config()

const app = express()

// Connect to database

// Middleware


const PORT = process.env.PORT || 5000

app.listen( PORT , () => {
    console.log("server is running ")
})

