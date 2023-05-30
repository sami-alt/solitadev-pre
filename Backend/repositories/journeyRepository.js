const {db} = require('./db')

module.exports.getJourneys = async () => {
    const data = await db('journeys').select('*')
    return data
}
