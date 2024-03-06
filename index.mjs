import express from 'express'
import cors from "cors"
import users from './routes/users.mjs'
import signup from './routes/signup.mjs'

const app = express()
const PORT = 5500

app.use(express.json())
app.use(cors())

app.use(express.static('static'))
app.use("/", signup)
app.use("/", users)

app.listen(PORT, () => {
    console.log("Server is running on localhost:" + PORT);
})