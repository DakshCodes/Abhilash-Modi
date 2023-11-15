import gsap from 'gsap';
import React, { useEffect } from 'react';
import './Preloader.css'

function PreLoader() {

    useEffect(() => {
        const loader = () => {
            gsap.set(".preloader", {
                opacity: 1,
            })
            gsap.set(".loader-pre", {
                opacity: 0,
                x: -100,
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

        };

        loader();
    }, []);

    return (
        <div className='preloader'>
            <p class="loader-pre rise">Effortless</p>
        </div>
    );
}

export default PreLoader;
