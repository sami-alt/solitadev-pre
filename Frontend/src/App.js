import React, { useCallback, useEffect, useState } from "react";
import { fetchJourneys } from "./api/journeys";


function App() {
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

    fetchJourneys({limit, offset}).then(setData, err => {
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

  return (
    <div className="container">
      <h1>City bike info</h1>
      <table>
        <thead>
          <tr>
          <th>Departure station</th>
          <th>Return station</th>
          <th>Covered distance in kilometers</th>
          <th>Duration in minutes</th>
          </tr>
        </thead>
        <tbody>
          {data.map(row => (
            <tr key={row.id}>
              <td>
                {row.departure_station_name}
              </td>
              <td>
                {row.return_station_name}
              </td>
              <td>
                {Math.round(row.covered_distance / 1000)}
              </td>
              <td>
                {Math.round(row.duration_sec / 60)}
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
      <div className="container">
        <div className="row">
          <button className="one-third column" disabled={page === 1} onClick={setPrevPage}>Previous page</button>
          <div className="one-third column" style={{textAlign: 'center'}}>
            Page {page}
          </div>
          <button className="one-third column" onClick={setNextPage}>Next page</button>
        </div>
      </div>
    </div>
  );
}

export default App;
