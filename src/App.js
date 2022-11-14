import Home from './home'
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import React from 'react'
import Place from './place'


const App = () => {
  return (
      <>
        <BrowserRouter>
            <Routes>
                <Route  path='/' element={<Home />}/>
                <Route path='/place' element={<Place />}/>
            </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
