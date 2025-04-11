import React from 'react'
import { createBrowserRouter, Route, Routes, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import PageNotFound from './PageNotFound'
import Layout from './Layout'
import Quotes from './Quotes'
import DetailPage from './DetailPage'


const Main = () => {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout />} >
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/quotes' element={<Quotes />} />
                <Route path='/quotes/:id' element={<DetailPage />} />
                <Route path='*' element={<PageNotFound />} />
            </Route>
        )
    )

    return (
        <>







            <RouterProvider router={router} />
        </>
    )
}

export default Main