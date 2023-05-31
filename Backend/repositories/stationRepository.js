
const {db} = require('./db')


module.exports.getStations = async (params) => {
	const data = await db('citybike_stations').select(
		[
			'fid', 'name_fi','address_fi'
		]
	)
		.limit(params.limit || 100 )
		.offset( params.offset || 0)
		.orderBy('fid')
	return data
}
