import React, { useMemo } from "react";
import Table from "../components/Table";
import { fetchStations } from "../api/stations";

export default function StationList() {
  const tableProps = useMemo(() => {
    return {
      fetchData: (params) => fetchStations(params),
      getRowId: (row) => row.fid,
      columns: {
        'Station name': (row) => row.name_fi,
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

