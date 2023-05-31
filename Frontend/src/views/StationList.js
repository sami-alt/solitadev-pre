import React, { useCallback, useState, useEffect } from "react";
import { fetchStations } from "../api/stations";

export default function stationList() {
    const [data, setData] = useState()
    const [error, setError] = useState()
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

        fetchStations({ limit, offset }).then(setData, err => {
            console.error(err)
            setError(err)
        })

    }, [page])

    if (!data) {
        return "Loading..."
    }

    if (error) {
        return <div>
            Error:{error}
        </div>
    }

    return (
        <div className="container">
            <hi>Station info</hi>
            <table>
                <thead>
                    <tr>
                        <th>Station name</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row =>
                        <tr key={row.fid}>
                            <td>{row.name_fi}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <div className="container">
                <div className="row">
                    <button className="one-third column" disabled={page === 1} onClick={setPrevPage}>Previous page</button>
                    <div className="one-third column" style={{ textAlign: 'center' }}>
                        Page {page}
                    </div>
                    <button className="one-third column" onClick={setNextPage}>Next page</button>
                </div>
            </div>

        </div>
    )
}