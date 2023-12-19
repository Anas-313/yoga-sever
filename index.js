import dotenv from "dotenv";
import mongoose from "mongoose"
import userRouter from "./Routes/userRoute.js"
import paymentRouter from "./Routes/paymentRoute.js"

import CORS from "cors"

dotenv.config();

import express from "express";

const app = express()

app.use(CORS())
app.use(express.json())

app.use("/user",userRouter)
app.use("/payment",paymentRouter)




app.use('/', async (req, res) => {
    return res.json({ "welcome Yogo Application": "yoga" })
})

//connecting mongodb
mongoose.connect(process.env.DB_LINK, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
        console.log('Database connection successfull.')
    }).catch((err) => {
        console.log(err)
    })

app.listen(5000, console.log('Server is running on port 5000'))