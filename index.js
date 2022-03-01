import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import usersRoute from "./route/endpoints.js";


const app = express()

app.use('/api', usersRoute)

app.use(bodyParser.json())
app.use(cors())

const CONNECTION_URL = "mongodb+srv://younghallaji:Muthorlib123@cluster0.ftlcd.mongodb.net/micseran?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology: true})
    .then(()=>app.listen(PORT, ()=>console.log(`Server Running on ${PORT} `)))
    .catch((err)=>console.log(err.message))