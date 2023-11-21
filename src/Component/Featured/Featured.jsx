import React, { useEffect } from 'react'
import './Featured.css'
import featuredphoto from '../../assets/abhilashmodi.jpg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import featured1 from '../../assets/images/featured/1.png'
import featured2 from '../../assets/images/featured/2.png'
import featured3 from '../../assets/images/featured/3.png'
import featured4 from '../../assets/images/featured/4.png'
import featured5 from '../../assets/images/featured/5.png'
import featured6 from '../../assets/images/featured/6.png'
import featured7 from '../../assets/images/featured/7.png'
import featured8 from '../../assets/images/featured/8.png'
import featured10 from '../../assets/images/featured/10.png'
import featured14 from '../../assets/images/featured/14.png'
import featured17 from '../../assets/images/featured/17.png'
import featured18 from '../../assets/images/featured/18.png'
import featured19 from '../../assets/images/featured/19.png'
import featured21 from '../../assets/images/featured/21.jpg'
import featured22 from '../../assets/images/featured/22.jpg'
import featured24 from '../../assets/images/featured/24.jpg'
import Effortless from '../Effortless'


const bulkImages = [
    featured1,
    featured2,
    featured3,
    featured4,
    featured5,
    featured6,
    featured7,
    featured8,
    featured10,
    featured14,
    featured17,
    featured18,
    featured19,
    featured22,
    featured24,
    featured21,
]


const Featured = () => {

    return (
        <div className="featured">
            <footer className="featured-head">
                <div className="featured-head-div">
                    <span data-speed={-200}>F</span>
                    <span data-speed={100}>e</span>
                    <span data-speed={200}>a</span>
                    <span data-speed={200}>t</span>
                    <span data-speed={-200}>u</span>
                    <span data-speed={250}>r</span>
                    <span data-speed={200}>e</span>
                    <span data-speed={-210}>d</span>
                    <span className='gap-heading'></span>
                    <span data-speed={140}>B</span>
                    <span data-speed={240}>y</span>
                </div>
            </footer>
            <div className="header__marq">
                <div className="marquee">
                    <ul className="marquee-content">
                        {
                            bulkImages.map((img, index) => (
                                <li>
                                    <img key={index} src={img} />
                                </li>
                            ))
                        }
                        {/* 
                        <li>
                            <img src="/assets/images/featured/14.png" alt />
                        </li>
                        <li>
                            <img src="/assets/images/featured/17.png" alt />
                        </li>
                        <li>
                            <img src="/assets/images/featured/18.png" alt />
                        </li>
                        <li>
                            <img src="/assets/images/featured/19.png" alt />
                        </li>
                        <li>
                            <img src="/assets/images/featured/2.png" alt />
                        </li>
                        <li>
                            <img src="/assets/images/featured/21.jpg" alt />
                        </li>
                        <li>
                            <img src="/assets/images/featured/22.jpg" alt />
                        </li>
                        <li>
                            <img src="/assets/images/featured/24.jpg" alt />
                        </li>
                        <li>
                            <img src="/assets/images/featured/3.png" alt />
                        </li>
                        <li>
                            <img src="/assets/images/featured/4.png" alt />
                        </li>
                        <li>
                            <img src="/assets/images/featured/5.png" alt />
                        </li>
                        <li>
                            <img src="/assets/images/featured/6.png" alt />
                        </li>
                        <li>
                            <img src="/assets/images/featured/7.png" alt />
                        </li>
                        <li>
                            <img src="/assets/images/featured/8.png" alt />
                        </li> */}
                    </ul>
                </div>
            </div>
            <div className="footer-img">
                <img className="img-1" src={featuredphoto} alt />
            </div>
        </div>

    )
}

export default Featured
