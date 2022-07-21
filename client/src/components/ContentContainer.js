import React from 'react'
import Navbar from './Navbar'

export default function ({ children }) {

    return (
        <>
            <Navbar />
            <div className='content_container'>{children}</div>
        </>
    )
}
