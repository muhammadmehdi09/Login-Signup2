import express from 'express'
import path from "path"

const __dirname = path.resolve()
const router = express.Router()

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
    },

]


router.get("/usersData", (req, res) => {
    try {
        res.status(200).sendFile(path.resolve(__dirname, "./public/users.html"))
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "error",
            message: error.message
        })
    }
})

router.get("/users", (req, res) => {
    try {
        res.status(200).send({
            status: "success",
            message: "data fetched successfully.",
            data: users
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: "error",
            message: "Something went wrong."
        })
    }
})

router.post("/users", (req, res) => {
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
            name: body.name,
            email: body.email,
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

router.delete("/users", (req, res) => {
    try {
        let i = req.body.i

        if (!i) {
            return res.status(400).send({
                status: "error",
                message: "missing required params.",
            })
        }

        if (!users.find(user => user.i === req.body.i)) {
            return res.status(400).send({
                status: "error",
                message: "item not found.",
            })
        }

        for (let x = 0; x <= users.length - 1; x++) {
            if (users[x].i === i) {
                users.splice(x, 1)
            }
        }
        res.status(200).send({
            status: "success",
            message: "data deleted successfully.",
            data: users
        })
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: error.message,
        })
    }
})

router.put("/users", (req, res) => {
    try {
        let i = req.body.i

        if (!i) {
            return res.status(400).send({
                status: "error",
                message: "missing required params.",
            })
        }

        if (!users.find(user => user.i === req.body.i)) {
            return res.status(400).send({
                status: "error",
                message: "item not found.",
            })
        }

        for (let x = 0; x <= users.length - 1; x++) {
            if (users[x].i === i) {
                users.splice(x, 1, {
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    i: i
                })
            }
        }
        res.status(200).send({
            status: "success",
            message: "data edited successfully.",
            data: users
        })
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: error.message,
        })
    }
})


export default router