import React from 'react'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import PageNotFound from './PageNotFound'
import Footer from './Footer'
import Quotes from './Quotes'
import DetailPage from './DetailPage'

const Main = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/services' element={<Services/>} />
                <Route path='/quotes' element={<Quotes/>} />
                <Route path='/quotes/:id' element={<DetailPage/>} />
                <Route path='*' element={<PageNotFound/>} />
            </Routes>

            <Footer/>

        </>
    )
}

export default Main