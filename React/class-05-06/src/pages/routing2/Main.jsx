import React, { useEffect } from 'react'
import { createBrowserRouter, Route, Routes, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import PageNotFound from './PageNotFound'
import Layout from './Layout'
import Quotes, { fetQuotes } from './Quotes'
import DetailPage, { fetchSingleQuote } from './DetailPage'
import ErrorElemenr from './ErrorElemenr'



const Main = () => {
   
    // admin/users
    // admin/products

    // products
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout />} >
                <Route path='/' element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/about/about1' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route loader={fetQuotes} errorElement={<ErrorElemenr />} path='/quotes' element={<Quotes />} />
                <Route loader={({ params }) => fetchSingleQuote(params)} path='/quotes/:id' element={<DetailPage />} />
                <Route path='*' element={<PageNotFound />} />
            </Route>
        )
    )

    return (
        <>


            <RouterProvider router={router} fallbackElement={<h1>Loading.......</h1>} />
        </>
    )
}

export default Main