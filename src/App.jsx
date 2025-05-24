import { useState } from 'react'
import './App.css'
import Subscribe from './components/Subscribe/Subscribe'
import Card from './components/Card/Card'
import Feedback from './components/Feedback/Feedback'

function App() {

  return (
    <>
      <Card/>
      <Subscribe />
      <Feedback />
    </>
  )
}

export default App
