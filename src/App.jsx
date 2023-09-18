import React from 'react'
import FetchData from './components/API/FetchData'

const App = () => {
    return (
      <div>
        <h1>Chi-Town Stadium Parking</h1>
          <div className="column">
            <FetchData />
          </div>
         
        
      </div>
    )
  }
  
  export default App