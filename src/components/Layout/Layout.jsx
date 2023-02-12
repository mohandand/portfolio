import React, { Fragment } from 'react';
import Header from '../Header/Header';
import HeroSection from '../Hero_Section/HeroSection';
import About from "../About/About"
const Layout = () => {
    return(
        <Fragment>
            <Header/>
            <HeroSection/>
            <About/>
        </Fragment>
    )
}

export default Layout;