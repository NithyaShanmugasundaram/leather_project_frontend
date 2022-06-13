import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';

function Landing() {
    return (
        <>
            <Navbar />
            <div style={{ marginTop: '20px' }}>
                <Carousel />
            </div>
        </>
    );
}

export default Landing;