const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
app.use(cors())
const journeyRepository = require('./repositories/journeyRepository')


app.get("/data", async (req, res) => {
    try {
        const data = await journeyRepository.getJourneys()
        res.json(data)
    } catch (err) {
        console.error(err)
        res.status(500).send('Internal server error').end()
    }
})

app.listen(port, () => {
    console.log('Server is listening in localhost:' + port)
})