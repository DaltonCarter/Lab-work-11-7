const express = require('express')
const cors = require('cors')//Cross Origin Resource Sharing

const app = express()

app.use(express.json())
app.use(cors())

app.get("/api/users", (req, res) => {
    console.log('Khatum.')
    let friends = ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"]
    res.status(200).send(friends)
})

app.get("/weather/:temperature", (req, res) => {
    console.log('What would you ask of us?')
    // const phrase = `<h3> It was ${phrase.params.temperature}</h3>`
    const {temperature} = req.params
    const phrase = `<h3> It was ${temperature} today.</h3>`
    res.status(200).send(phrase)

})

app.listen(4000, () => {
    console.log('Adun Toridas.')
    console.log('Server is running on port 4000')
    
})
