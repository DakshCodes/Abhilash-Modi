import React, { useEffect } from 'react';
import gsap, { Expo } from 'gsap';
import SplitType from 'split-type'; // Import SplitType library if needed
import './Hero.css';
import herophotomain from '../../assets/images/am-pic.jpeg'

const Hero = () => {
    useEffect(() => {

        gsap.set(".hero-container .title ", {
            opacity: 0,
            x: -100,
        })

        gsap.set('.moto h2', {
            opacity: 0,
            x: '40',
        });
        gsap.set(".expore-btn button", {
            opacity: 0,
            x: "100",
        });

        gsap.set(".shape", {
            opacity: 0,
            y: "300",
        });
        const tl = gsap.timeline();


        tl.to(".box", {
            y: "-100%",
            ease: 'expo.inOut',
            duration: 2,
        }).to(".hero-container .title ", 0.4, {
            opacity: 1,
            x: 0,
            duration: 0.3,
            ease: 'sine.inOut',
            delay: -0.7
        }).to('.moto h2', {
            opacity: 1,
            x: 0,
            duration: 0.2,
            ease: 'sine.out',
            stagger: 0.1,
            delay: -0.3
        }).to(".expore-btn button", {
            opacity: 1,
            x: 1,
            duration: 0.2,
            ease: 'sine.out',
            delay: -0.5
        }).to(".shape", 2, {
            opacity: 1,
            y: 0,
            ease: Expo.easeInOut,
            delay: -0.8
        });



        gsap.utils.toArray(".line-curv").forEach((svg) => {
            const q = gsap.utils.selector(svg);
            gsap.from(q("path"), {
                opacity: 0,
                duration: 4,
                delay: 5,
                stagger: {
                    each: 0.9,
                    from: "random",
                }
            });
        });

        let typeSplit = new SplitType('.moto h2', {
            types: 'lines, words, chars',
            tagName: 'span'
        });

    }, []);
    return (
        <div id="hero">
            <div className="container-hero">
                <div className="hero-image">
                    <div className="wrapper-img">
                        <div className="box" />
                        <div>
                            <img className="image" src={herophotomain} />
                        </div>
                    </div>
                </div>
                <div className="hero-container">
                    <h1 className="title">Abhilash <span>Modi.</span></h1>
                </div>

                <div className="expore-btn">
                    <button>
                        <a href="#">
                            <span>Explore More</span>
                        </a>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                            <g id="SVGRepo_iconCarrier">
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.5303 13.9697C17.8232 14.2626 17.8232 14.7374 17.5303 15.0303L12.5303 20.0303C12.2374 20.3232 11.7626 20.3232 11.4697 20.0303L6.46967 15.0303C6.17678 14.7374 6.17678 14.2626 6.46967 13.9697C6.76256 13.6768 7.23744 13.6768 7.53033 13.9697L12 18.4393L16.4697 13.9697C16.7626 13.6768 17.2374 13.6768 17.5303 13.9697Z" fill="#fff" />
                                <g opacity="0.5">
                                    <path d="M12.75 9.5C12.75 8.54665 12.4702 7.13332 11.6087 5.93677C10.7196 4.70198 9.24444 3.75 7 3.75C6.58579 3.75 6.25 4.08579 6.25 4.5C6.25 4.91421 6.58579 5.25 7 5.25C8.75556 5.25 9.7804 5.96468 10.3913 6.81323C11.0298 7.70002 11.25 8.78668 11.25 9.5L11.25 17.6893L12 18.4393L12.75 17.6893V9.5Z" fill="#fff" />
                                    <path d="M12.1977 20.2236C12.0432 20.2656 11.878 20.2575 11.7278 20.199C11.8122 20.2319 11.904 20.25 12 20.25C12.0684 20.25 12.1347 20.2408 12.1977 20.2236Z" fill="#fff" />
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
            <svg className="shape" width={211} height={189} viewBox="0 0 211 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-78 181.351C-74.8794 161.414 -71.4133 149.51 -56.5092 135.634C-42.3768 122.476 -30.2568 114.866 -10.8901 117.464C11.1145 120.416 27.6014 134.307 26.2304 157.613C25.789 165.117 23.6884 186.626 12.5545 186.626C3.96556 186.626 -0.383057 173.761 -2.78217 167.284C-9.11905 150.174 -17.4583 122.217 -6.10347 105.351C4.01411 90.3237 28.5664 89.1063 43.9115 95.7781C68.3548 106.406 80.5321 132.802 79.8598 158.688C79.7492 162.944 80.8913 184.483 72.631 178.029C50.7064 160.901 42.891 132.156 44.5953 105.644C46.4102 77.4126 56.3101 44.7566 89.1399 44.0048C108.173 43.5689 125.95 47.9549 140.62 60.6113C156.294 74.1339 156.918 90.9347 156.347 110.431C155.923 124.957 154.793 139.53 151.952 153.803C150.76 159.789 149.446 171.047 144.528 175.685C136.482 183.271 133.792 142.222 133.782 139.541C133.706 119.018 134.663 98.4301 144.137 79.7577C159.526 49.4272 183.14 23.6806 209 2" stroke="rgba(245, 247, 250, 1)" strokeWidth={3} strokeLinecap="round" />
            </svg>
        </div>

    )
}

export default Hero
