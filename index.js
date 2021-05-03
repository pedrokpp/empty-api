require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const app = express()

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})
const db = mongoose.connection

db.on('error', error => console.error(error))
db.once('open', () => console.log("Database conectada"))

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/users', userRouter)

app.listen(3000, () => console.log('API pronta'))