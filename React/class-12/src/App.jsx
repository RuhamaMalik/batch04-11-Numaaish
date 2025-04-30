import { useState } from 'react'
import ThemeProvider from './contexts/ThemeProvider'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from "./components/Layout"
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router} />

      </ThemeProvider>


    </>
  )
}

export default App
