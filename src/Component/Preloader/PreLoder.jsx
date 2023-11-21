import gsap from 'gsap';
import React, { useEffect } from 'react';
import './Preloader.css'

function PreLoader() {

    useEffect(() => {
        const loader = () => {
            gsap.set(".preloader", {
                opacity: 1,
            })
            gsap.to(".loader-pre", 2, {
                opacity: 1,
                x: 0,
                ease: "expo.inOut",
            });
            gsap.to(".preloader", 4, {
                opacity: 0,
                ease: "expo.inOut",
            });
            gsap.to(".preloader", {
                y: "-100%",
                ease: "expo.inOut",
                delay:2.7
            });


        };

        loader();
    }, []);

    return (
        <div className='preloader'>
            <p className="loader-pre rise">Effortless</p>
        </div>
    );
}

export default PreLoader;
