// require('dotenv').config({path: './env'});
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB();







/*
import express from "express";
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.error("ERROR", err);
            throw err;
        })

        app.listen(proces.env.PORT, () => {
            console.log(`App is listening on port ${proces.env.PORT}`)
        })
    } catch (err) {
        console.error("ERROR", err);
        throw err;
    }
})()
*/