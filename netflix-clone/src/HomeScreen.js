import React from 'react';
import Banner from './Banner';
import "./HomeScreen.css";
import Nav from './Nav';
import Row from './Row';

function HomeScreen() {
  return (
    <div className='homeScreen'>
        {/* Navbar */}
        <Nav/>
        {/* Banner */}
        <Banner/>
        {/* Rows */}
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
        <Row />
    </div>
  )
}

export default HomeScreen