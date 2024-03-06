import express from 'express'
import path from 'path'

const router  = express.Router()
const __dirname = path.resolve()
const users = [
    {
        name: "Obaid",
        email: "obaidmuneer55@gmail.com",
        password: "obaid1234",
        i: "1"
    },
    {
        name: "Shehzad",
        email: "shehzad123@gmail.com",
        password: "shehzad1234",
        i: "2"
    },
    {
        name: "Mehdi",
        email: "muhammadmehdi09@gmail.com",
        password: "mm987654",
        i: "3"
    }
]

router.get("/signup", (req, res) => {
    try {
        res.status(200).sendFile(path.resolve(__dirname, "./public/signup.html"))
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "Something went wrong",
            status: "error"
        })
    }

})

router.post("/signup", (req, res) => {
    try {
        const body = req.body
        console.log(body, "this is body");
        console.log(body.name, "this is name");
        if (!body.name) {
            return res.status(400).send({
                status: "error",
                message: "missing required params.",
            })

        }
        users.push({ 
            name: body.name ,
            email: body.email ,
            password: body.password,
            i: body.i
        })

        res.status(200).send({
            status: "success",
            message: "data added successfully.",
            data: users
        })
    } catch (error) {
        console.log(error, "this is error");
        res.status(500).send({
            status: "error",
            message: error.message
        })
    }
})

export default router