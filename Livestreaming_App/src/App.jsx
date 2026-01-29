import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Join from './Join';
import ZegoCloud from './ZegoCloud';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Join />}/>
        <Route path='/room/:id' element={<ZegoCloud />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
