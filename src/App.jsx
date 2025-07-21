import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Career from './Components/Career'
import Contact from './Components/Contact'
import FeedbackForm from './Components/FeedbackForm'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Service/>}/>
      <Route path='/career' element={<Career/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/feedbackform' element={<FeedbackForm/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App
