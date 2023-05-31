import './app.css'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import JourneyList from './views/JourneyList'
import StationList from './views/StationList'
import SingleStationView from './views/SingleStationView'

function App() {
  return (
    <div className='app-root-container'>
      <nav className='navbar'>
        <div className='container'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <Link to='/' className='navbar-link'>Home</Link>
                </li>
                <li className='navbar-item'>
                    <Link to='/journeys' className='navbar-link'>Journey list</Link>
                </li>
                <li className='navbar-item'>
                    <Link to='/stations' className='navbar-link'>Station list</Link>
                </li>
            </ul>
        </div>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/journeys' element={<JourneyList />} />
        <Route path='/stations' element={<StationList/>} />
        <Route path='/stations/:fid' element={<SingleStationView />} />
      </Routes>
    </div>
  );
}

export default App;
