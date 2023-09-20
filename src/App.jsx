import React from 'react'
import Nav from './components/Nav'
import FetchData from './components/API/FetchData'

const App = () => {
    return (
      <div>
          <div className="column">
            <Nav />
            <FetchData />
          </div>
         
        
      </div>
    )
  }
  
  export default App