const express = require('express')
const app = express()
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000
//Connect DB
connectDB()
//initialise middleware
app.use(express.json({ extended: false }))
//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'))
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})