import React from 'react'
import Tilt from 'react-tilt'
import './logo.css'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className='Tilt br2 shadow-2' options={{ max: 55 }} style={{ height: 150, width: 200 }}>
                  <div className='Tilt-inner'><img  style={{paddingTop: '5px'}} src="https://img.icons8.com/wired/64/000000/brain.png" alt="logo"/></div>
            </Tilt>
        </div>
    )
}

export default Logo