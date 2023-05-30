const {db} = require('./db')

module.exports.getJourneys = async (params) => {
    const data = await db('journeys').select(
        [
        'id', 'departure_station_name', 'return_station_name',
        'covered_distance', 'duration_sec'
        ]
    )
    .limit(params.limit || 100)
    .offset(params.offset || 0)
    .orderBy('id')

    return data
}
