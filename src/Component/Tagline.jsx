import React from 'react'
import './Tagline.css'

const Tagline = () => {
    return (<>
        <div className="title-head">Let's</div>
        <div className='tagline'>
            <div className="profile-title">
                <div className="titles-box">
                    <div className="title-point"></div>
                    <div className="title-point">
                        <span className='arrow-icon'>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </span>Inspire Pepole</div>
                    <div className="title-point">Not Attract</div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Tagline
