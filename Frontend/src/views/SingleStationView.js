import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchStationById } from '../api/stations'

export default function SingleStationView() {
	const {id} = useParams()
	const [station, setStation] = useState()
	const [error, setError] = useState()

	useEffect(() => {
		fetchStationById(Number(id)).then((station) => {
			setStation(station)
			document.title = station.name_fi
		}, err => {
			console.error(err)
			setError(err)
		})
	}, [])

	if (error) {
		return <div>Error: {error}</div>
	}

	if (!station) {
		return <div className='container'>Loading...</div>
	}

	return <div className='container'>
		<div className="row">
			<div className="three columns">Station name</div>
			<div className="nine columns">{station.name_fi}</div>
		</div>
		<div className="row">
			<div className="three columns">Station address</div>
			<div className="nine columns">{station.address_fi}</div>
		</div>
		<div className="row">
			<div className="three columns">Departures</div>
			<div className="nine columns">{station.departures_count}</div>
		</div>
		<div className="row">
			<div className="three columns">Returnals</div>
			<div className="nine columns">{station.returnals_count}</div>
		</div>
	</div>
}
