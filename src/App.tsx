import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './app/pages/HomePage'
import { config } from './app/config/app.config'

function App() {
  return (
    <BrowserRouter basename={`/${config.REPOSITORY}`}>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
