import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleStationView() {
    const {fid} = useParams()

    return <div className='container'>
        {fid}
    </div>
}