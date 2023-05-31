import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export default function Table(props) {
	const [error, setError] = useState()
	const [data, setData] = useState()
	const [page, setPage] = useState(1)

	const setNextPage = useCallback(() => {
		setPage(currentPage => currentPage + 1)
	})
	const setPrevPage = useCallback(() => {
		setPage(currentPage => Math.max(1, currentPage - 1))
	})

	useEffect(() => {
		const limit = 30
		const offset = (page - 1) * limit

		props.fetchData({ limit, offset }).then(setData, err => {
			console.error(err)
			setError(String(err))
		})
	}, [page])

	if (!data) {
		return 'Loading...'
	}

	if (error) {
		return <div>
            Error: {error}
		</div>
	}

	const columnNames = Object.keys(props.columns)

	return (
		<div>
			<table>
				<thead>
					<tr>
						{/* Use column names as the thead row */}
						{columnNames.map(
							columnName => <th key={columnName}>{columnName}</th>
						)}
					</tr>
				</thead>
				<tbody>
					{data.map(row => (
						<tr key={props.getRowId(row)}>
							{columnNames.map(columnName => (
								<td key={columnName}>
									{/* Render each column of each row with the corresponding column renderer function */}
									{props.columns[columnName](row)}
								</td>
							))}
						</tr>
					))
					}
				</tbody>
			</table>
			<div className="row">
				<button className="one-third column" disabled={page === 1} onClick={setPrevPage}>Previous page</button>
				<div className="one-third column" style={{ textAlign: 'center' }}>
                    Page {page}
				</div>
				<button className="one-third column" onClick={setNextPage}>Next page</button>
			</div>
		</div>
	)
}

Table.propTypes = {
	/**
     * Function that gets parameters limit and offset, and should
     * fetch the data to show in the table, returning a Promise of an array.
     */
	fetchData: PropTypes.func,
	/**
     * Function that gets one of the rews and should return a unique key for it.
     */
	getRowId: PropTypes.func,
	/**
     * Object mapping from column names to a function that gets one of the rows
     * and renders that column for the row.
     */
	columns: PropTypes.object,
}