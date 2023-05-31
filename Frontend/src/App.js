import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import JourneyList from './views/JourneyList'

function App() {
  return (
    <div className='app'>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/journeys'>Journey list</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/journeys' element={<JourneyList />} />
      </Routes>
    </div>
  );
}

export default App;
