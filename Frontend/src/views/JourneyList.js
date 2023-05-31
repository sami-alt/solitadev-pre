import React, { useMemo } from 'react'
import { fetchJourneys } from '../api/journeys'
import Table from '../components/Table'

export default function JourneyList() {
	const tableProps = useMemo(() => {
		return {
			fetchData: (params) => fetchJourneys(params),
			getRowId: (row) => row.id,
			columns: {
				'Departure station': (row) => row.departure_station_name,
				'Return station': (row) => row.return_station_name,
				'Covered distance in kilometers': (row) => Math.round(row.covered_distance / 1000),
				'Duration in minutes': (row) => Math.round(row.duration_sec / 60),
			}
		}
	}, [])

	return (
		<div className="container">
			<h1>City bike info</h1>
			<Table {...tableProps} />
		</div>
	)
}

