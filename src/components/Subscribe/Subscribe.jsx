import React from 'react'
import './Subscribe.css'
export default function Subscribe() {
    return (
        <div className='subscribe'>
            <h1>Subscribe</h1>
            <p>Subscribe to our newsletter to get the latest news!</p>
            <div className='subscribe-form'>
                <input type="text" placeholder='Enter your email' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}
