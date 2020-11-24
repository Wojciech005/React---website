import React from 'react'
import {Route, Switch} from 'react-router-dom'
import header1 from '../images/header1.jpg'
import header2 from '../images/header2.jpg'
import header3 from '../images/header3.jpg'
import "../styles/Header.css"


const Header = () => {

    // const images = [header1, header2, header3]
    // const index = Math.floor(Math.random() * 3)

    // const img = images[index]

    return(
        <>
        <Switch>
        <Route path="/products" render={() => (
            <img src={header2} alt="miasto"/>
        ) } />
         <Route path="/contact" render={() => (
            <img src={header3} alt="miasto"/>
        ) } />
        <Route path="/admin" render={() => (
            <img src={header3} alt="miasto"/>
        ) } />
         <Route path="/" exac render={() => (
            <img src={header1} alt="miasto"/>
        ) } />
         <Route render={() => (
            <img src={header1} alt="miasto"/>
        ) } />
        </Switch>
            {/* <img src={img} alt="header" /> */}
        </>
    )
}

export default Header;