import React from 'react';
import "./Banner.css";

function Banner() {
    function truncate (string, n){
        
    }

  return (
    <header className='banner' style={{
        backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg)`,
        backgroundSize: "cover",
        backgroundPosition: "center center"  
    }}>

        <div className="banner__contents">
            <h1 className="banner__title">Movie Name</h1>
            <div className="banner__buttons">
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>
            <h1 className="banner__description">
                This is a test description
            </h1>
        </div>

        <div className="banner--fadeBottom"></div>

    </header>
  )
}

export default Banner