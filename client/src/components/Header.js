import React from 'react';
import Navbar from './Navbar';
import Carousel from './Carousel';

function Header() {
    return (
        <>
            <Navbar />
            <div style={{ marginTop: '20px' }}>
                <Carousel />
            </div>
        </>
    );
}

export default Header;