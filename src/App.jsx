import React from 'react'
import Nav from './components/Nav'
import FetchData from './components/API/FetchData'

const App = () => {
    return (
      <div>
        <Nav />
          <div>
            <FetchData />
          </div>
         
        
      </div>
    )
  }
  
  export default App