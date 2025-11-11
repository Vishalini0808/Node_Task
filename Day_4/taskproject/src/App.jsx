import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OnOff from './components/OnOff'
import OnOffonSubmit from './components/OnOffonSubmit'

const App = () => {
  return (
    <div>
     
        <OnOff/>
        <OnOffonSubmit/>
      
    </div>
  )
}

export default App