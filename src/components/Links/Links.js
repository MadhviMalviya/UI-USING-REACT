import React from 'react'
import './links.css'

function Links() {
    return (<>
        <div className='links' >
            <button> <a id='left' href='https://www.google.co.in'>Continue with Google</a></button>
            <button> <a id='right' href='https://web.facebook.com'>Continue with Facebook</a></button>
        </div><br></br>
        <div><p>Don't have any account? <b>Sign Up</b></p></div>
        </>
    )
}

export default Links
