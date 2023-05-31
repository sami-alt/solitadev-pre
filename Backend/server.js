const express = require('express')
const app = express()
const cors = require('cors')
const port = 3001
app.use(cors())
const journeyRepository = require('./repositories/journeyRepository')
const stationRepository = require('./repositories/stationRepository')

function parsePaginationParams(req) {
    return {
        limit: Number(req.query.limit),
        offset: Number(req.query.offset),
    }
}

function onError(res, err) {
    console.error(err)
    res.status(500).send('Internal server error').end()
}

app.get("/journeys", async (req, res) => {
    try {
        const data = await journeyRepository.getJourneys(parsePaginationParams(req))
        res.json(data)
    } catch (err) {
        onError(res, err)
    }
})

app.get("/stations", async (req, res) => {
    try {
        const data = await stationRepository.getStations(parsePaginationParams(req))
        res.json(data)
    } catch (err) {
        onError(res, err)
    }
})

app.listen(port, () => {
    console.log('Server is listening in localhost:' + port)
})