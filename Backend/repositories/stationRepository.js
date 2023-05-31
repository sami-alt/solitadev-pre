
const {db} = require('./db')

module.exports.getStations = async (params) => {
	const data = await db('citybike_stations').select(
		[
			'id', 'name_fi','address_fi'
		]
	)
		.limit(params.limit || 100 )
		.offset( params.offset || 0)
		.orderBy('id')
	return data
}

module.exports.getStationById = async (id) => {
	const query = db('citybike_stations as station')
		.select([
			'station.id', 'station.name_fi', 'station.address_fi',
			db('journeys').count().where('departure_station_id', id).as('departures_count'),
			db('journeys').count().where('return_station_id', id).as('returnals_count'),
		])
		.where({id})

	const data = await query
	return data[0]
}
