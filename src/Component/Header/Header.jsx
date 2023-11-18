import React, { useEffect } from 'react';
import gsap, { Expo } from 'gsap'; // Import GreenSock Animation Platform
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    const toggleNav = () => {
        const navbar = document.querySelector("[data-navbar]");
        const overlay = document.querySelector("[data-overlay]");

        navbar.classList.toggle("active");
        overlay.classList.toggle("active");
        // document.body.classList.toggle("active");
    };

    const closeNav = () => {
        const navbar = document.querySelector("[data-navbar]");
        const overlay = document.querySelector("[data-overlay]");

        navbar.classList.remove("active");
        overlay.classList.remove("active");
        // document.body.classList.remove("active");
    };

    useEffect(() => {

        gsap.set(".container .logo", {
            opacity: 0,
            x: "-100",
            rotation: 10,
        });

        gsap.set(".animated-text", {
            opacity: 0,
        });

        gsap.set(".container .nav-open-btn", {
            opacity: 0,
            x: "-100",
            rotation: 10,
        });

        gsap.to(".container .logo", 2, {
            opacity: 1,
            x: 0,
            rotation: 0,
            ease: Expo.easeInOut,
            delay: 4,
        });

        gsap.to(".animated-text", 2, {
            opacity: 1,
            ease: Expo.easeInOut,
        });

        gsap.to(".container .nav-open-btn", 2, {
            opacity: 1,
            x: 0,
            rotation: 0,
            ease: Expo.easeInOut,
        });


        const navTogglers = document.querySelectorAll("[data-nav-toggler]");
        const navLinks = document.querySelectorAll("[data-nav-link]");

        const addEventOnElements = (elements, eventType, callback) => {
            elements.forEach(element => {
                element.addEventListener(eventType, callback);
            });
        };

        addEventOnElements(navTogglers, "click", toggleNav);
        addEventOnElements(navLinks, "click", closeNav);

        return () => {
            // Clean up - remove event listeners
            navTogglers.forEach(element => {
                element.removeEventListener("click", toggleNav);
            });
            navLinks.forEach(element => {
                element.removeEventListener("click", closeNav);
            });
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount
    useEffect(() => {
        var elems = document.querySelectorAll(".elem");

        elems.forEach(function (elem) {
            var h1s = elem.querySelectorAll(".elem h1");
            var index = 0;
            var animating = false;

            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        animate(); // Run the animation when the element is in view
                    }
                });
            });

            observer.observe(elem);

            function animate() {
                if (!animating) {
                    animating = true;
                    gsap.to(h1s[index], {
                        top: "-=100%",
                        // ease: Expo.easeInOut,
                        duration: 2,
                        onComplete: function () {
                            gsap.set(this._targets[0], {
                                top: "100%"
                            });
                            animating = false;
                        }
                    });

                    index === h1s.length - 1 ? (index = 0) : index++;

                    gsap.to(h1s[index], {
                        top: "-=100%",
                        ease: Expo.easeInOut,
                        duration: 2,
                        onComplete: function () {
                            // Schedule the next animation when this one completes
                            requestAnimationFrame(animate);
                        }
                    });
                }
            }
        });
    }, []);

    return (
        <header className="header" data-header>
            <div className="container">
                <Link to={'/'} className="logo" >
                    AM
                </Link>
                <div className="animated-text">
                    <div className="elem">
                        <h1>an author</h1>
                        <h1>a writer</h1>
                        <h1>a philanthropist</h1>
                        <h1> a humanitarian</h1>
                        <h1>a life coach</h1>
                        <h1>a motivator</h1>
                    </div>
                </div>
                <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
                    {/* <img src="./assets/images/menu.svg" width="17" height="17" alt="menu icon"> */}
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                        <g id="SVGRepo_iconCarrier">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="#414143 " strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                    </svg>
                </button>
                <nav className="navbar" data-navbar>
                    <div className="navbar-top">
                        <Link to={'/'} className="logo" data-nav-toggler>
                            AM
                        </Link>
                        <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
                            <span className="span one" />
                            <span className="span two" />
                        </button>
                    </div>
                    <ul className="navbar-list">
                        <div id="nav-content">
                            <Link to={'/about'}  data-nav-toggler>
                            <div className="nav-button"><i className="fas fa-palette" /><span>About</span></div>
                            </Link>
                            <Link to={'/impact'} data-nav-toggler>
                                <div className="nav-button"><i className="fas fa-images" /><span>Imapact</span></div>
                            </Link>
                            <div className="nav-button"><i className="fas fa-images" /><span>Seekh</span></div>
                            <div className="nav-button"><i className="fas fa-images" /><span>Videos</span></div>
                            <div className="nav-button"><i className="fas fa-images" /><span>My Thoughts</span></div>
                            <div className="nav-button"><i className="fas fa-images" /><span>Contact Me</span></div>
                        </div>
                    </ul>
                </nav>
                <div className="overlay" data-nav-toggler data-overlay />
            </div>
        </header>

    )
}

export default Header
