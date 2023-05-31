const stationRepository = require('../repositories/stationRepository')

test('should list first three stations', async () => {
	const stations = await stationRepository.getStations({
		limit: 3
	})
	expect(stations).toEqual([
		{ id: 1, name_fi: 'Kaivopuisto', address_fi: 'Meritori 1' },
		{
			id: 2,
			name_fi: 'Laivasillankatu',
			address_fi: 'Laivasillankatu 14'
		},
		{
			id: 3,
			name_fi: 'Kapteeninpuistikko',
			address_fi: 'Tehtaankatu 13'
		}
	])
})

test('should get station data for Kaivopuisto', async () => {
	const station = await stationRepository.getStationById(1)
	expect(station).toEqual({        
		id: 1, 
		name_fi: 'Kaivopuisto',
		address_fi: 'Meritori 1',
		departures_count: '5416',
		returnals_count: '5848'
	})
})
