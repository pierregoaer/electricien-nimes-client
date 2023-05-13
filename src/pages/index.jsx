import React, {useEffect} from 'react';

import Layout from "../components/Layout";
import HomeHero from '../components/HomeHero.jsx';
import HomeAboutUs from '../components/HomeAboutUs';
import HomeServices from '../components/HomeServices';
import Testimonials from '../components/Testimonials';
import HomeFAQ from '../components/HomeFAQ';

import '../styles/global.css'

export default function Home() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Layout>
                <HomeHero/>
                <HomeAboutUs/>
                <HomeServices/>
                <Testimonials/>
                <HomeFAQ/>
            </Layout>
        </>
    );
}
