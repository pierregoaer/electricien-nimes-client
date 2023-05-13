import React from 'react'
import Nav from "./Nav"
import Footer from "./Footer"
import CTAMain from "./CTAMain"

export default function Layout({children}) {
    return (
        <>
            <Nav/>
            { children }
            <CTAMain/>
            <Footer/>
        </>
    )
}