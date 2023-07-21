import React from 'react'
import Header from './Components/Header/Header'
import "./App.css"
import Navbar from './Components/Navbar/Navbar'
import Movies from './Components/Movies/Movies'
import Collection from './Components/Collection/Collection'

const App = () => {
  return (
    <div className='App'>
      <Header /><hr></hr>
      <Navbar /><hr></hr>
      {/* <Collection /> */}
      <Movies />
    </div>
  )
}

export default App
