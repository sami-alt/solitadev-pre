import React, { useMemo } from "react";
import Table from "../components/Table";
import { fetchStations } from "../api/stations";
import { Link } from "react-router-dom";

export default function StationList() {
  const tableProps = useMemo(() => {
    return {
      fetchData: (params) => fetchStations(params),
      getRowId: (row) => row.fid,
      columns: {
        'Station name': (row) => <Link to={`/stations/${row.fid}`}>{row.name_fi}</Link>,
      }
    }
  }, [])

  return (
    <div className="container">
      <h1>Stations</h1>
      <Table {...tableProps} />
    </div>
  );
}

