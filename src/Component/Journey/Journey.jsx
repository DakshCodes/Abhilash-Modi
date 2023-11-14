import React, { useEffect, useRef } from 'react';
import './Journey.css';
import anime from 'animejs'; // Import anime.js library
import { gsap } from 'gsap'; // Import gsap library
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Import ScrollTrigger from gsap

// Import your images
import tedx from '../../assets/images/tedx.webp';
import josh from '../../assets/images/josh.webp';
import tils from '../../assets/images/tils.jpg';
import records from '../../assets/images/recordes.webp';
import motivator from '../../assets/images/am-pic3.jpg';

const Journey = () => {
    const titleRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const titleText = "The Journey";
        titleRef.current.querySelector('span').innerText = titleText;

        const cards = cardsRef.current;

        function rotateCards() {
            let angle = 0;
            cards.forEach((card) => {
                if (card.classList.contains('active')) {
                    card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
                } else {
                    card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
                    angle = angle - 2;
                }
            });
        }

        function animateTitleText(newText) {
            anime({
                targets: titleRef.current.querySelector('h3'),
                opacity: [1, 0.5],
                duration: 100,
                easing: 'linear',
                complete: function () {
                    titleRef.current.querySelector('span').innerText = newText;
                    anime({
                        targets: titleRef.current.querySelector('h3'),
                        opacity: [0.5, 1],
                        duration: 900,
                        easing: 'linear',
                    });
                },
            });
        }

        function handleScroll() {
            const stackArea = document.querySelector('.stack-area');
            const proportion = stackArea.getBoundingClientRect().top / window.innerHeight;
            if (proportion <= 0) {
                const n = cards.length;
                let index = Math.ceil((proportion * n) / 2);
                index = Math.abs(index) - 1;
                for (let i = 0; i < n; i++) {
                    if (i <= index) {
                        cards[i].classList.add('active');
                        if (cards[i + 1]) {
                            animateTitleText(cards[i + 1].querySelector('.experience-title').innerText);
                        }
                    } else {
                        cards[i].classList.remove('active');
                    }
                }
                rotateCards();
            }
        }
        window.addEventListener('scroll', handleScroll);

        gsap.registerPlugin(ScrollTrigger);

        ScrollTrigger.create({
            trigger: ".right-ex",
            start: '40% 50%',
            end: '80% 50%',
            onEnter: () => {
                const firstCard = cardsRef.current[0];
                if (firstCard) {
                    const text = firstCard.querySelector(".experience-title")?.innerText || "";
                    animateTitleText(text);
                }
            },
            onLeaveBack: () => animateTitleText(titleText),
            onEnterBack: () => {
                const firstCard = cardsRef.current[0];
                if (firstCard) {
                    const text = firstCard.querySelector(".experience-title")?.innerText || "";
                    animateTitleText(text);
                }
            },
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <div className="center-ex">
            <div className="stack-area" >
                <div className="left-ex">
                    <div className="title" ref={titleRef}>
                        <h3>
                            <span />
                            <svg id="svg-ex" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier">
                                    <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M12 3.25C12.4142 3.25 12.75 3.58579 12.75 4L12.75 13.25H11.25L11.25 4C11.25 3.58579 11.5858 3.25 12 3.25Z" fill="#fff" />
                                    <path d="M6.00002 13.25C5.69667 13.25 5.4232 13.4327 5.30711 13.713C5.19103 13.9932 5.25519 14.3158 5.46969 14.5303L11.4697 20.5303C11.6103 20.671 11.8011 20.75 12 20.75C12.1989 20.75 12.3897 20.671 12.5304 20.5303L18.5304 14.5303C18.7449 14.3158 18.809 13.9932 18.6929 13.713C18.5768 13.4327 18.3034 13.25 18 13.25L6.00002 13.25Z" fill="#fff" />
                                </g>
                            </svg>
                        </h3>
                    </div>
                </div>
                <div className="active">
                    <div className="active-title">
                        The Journey
                    </div>
                </div>
                <div className="right-ex">
                    <div className="cards">
                        <a data-color="white" className="card" href alt="Mythrill" target="_blank">
                            <div className="experience">
                                <div className="experience-wrapper">
                                    <img src={tedx} className="cover-image" />
                                </div>
                                <span className="experience-title">JoshTalk
                                </span>
                            </div>
                        </a>
                        <a data-color="#901808" className="card" alt="Mythrill" target="_blank">
                            <div className="experience">
                                <div className="experience-wrapper">
                                    <img src={josh} className="cover-image" />
                                </div>
                                <span className="experience-title">TedX</span>
                            </div>
                        </a>
                        <a data-color="green" className="card" alt="Mythrill" target="_blank">
                            <div className="experience">
                                <div className="experience-wrapper">
                                    <img src={tils} className="cover-image" />
                                </div>
                                <span className="experience-title">Tils</span>
                            </div>
                        </a>
                        <a data-color="purple" className="card" alt="Mythrill" target="_blank">
                            <div className="experience">
                                <div className="experience-wrapper">
                                    <img src={records} className="cover-image" />
                                </div>
                                <span className="experience-title">Records</span>
                            </div>
                        </a>
                        <a data-color="blue" className="card" alt="Mythrill" target="_blank">
                            <div className="experience">
                                <div className="experience-wrapper">
                                    <img src={motivator} className="cover-image" />
                                </div>
                                <span className="experience-title">Motivator</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Journey
