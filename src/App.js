import React from 'react'
import "./main.scss";
import Navbar from './components/Navbar';
import MiddleContainer from './components/MiddleContainer';
import MiddleContainerSecond from './components/MiddleContainerSecond';
import LastContainer from './components/LastContainer';
const App = () => {
  return (
    <>
      <div className = "main-container">
        <Navbar/>
        <MiddleContainer/>
        <MiddleContainerSecond/>
        <LastContainer/>
      </div>
    </>
  )
}

export default App
