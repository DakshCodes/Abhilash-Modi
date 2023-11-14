import React, { useEffect } from 'react'
import './About.css'
import sirpic from '../../assets/images/am-pic4.jpg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger' // Import ScrollTrigger
import SplitType from 'split-type'

const About = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger) // Register ScrollTrigger plugin

        gsap.set('.about-head-div span', {
            y: (i, el) => (1 - parseFloat(el.getAttribute('data-speed'))),
            opacity: 0
        })

        // Animation for individual letters in the about-head-div
        gsap.to('.about-head-div span', {
            y: (i, el) => 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.about-head',
                start: '-40% bottom',
                end: '50% bottom',
                scrub: 1,
            }
        })

        // Initialize SplitType for text animation
        const typeSplit = new SplitType('.about__p p', {
            types: 'lines, words, chars',
            tagName: 'span'
        });

        // Animate the text using GSAP
        gsap.to(".about__p>p .word", {
            backgroundPositionX: '0%',
            stagger: 0.02,
            ease: 'sine.out',
            scrollTrigger: {
                trigger: '.about__txt',
                scrub: 1.5,
                start: '-30% 30%',
                end: '25% 30%',
            }
        })
    }, [])


    return (
        <div className="about">
            <footer className="about-head">
                <div className="about-head-div">
                    <span data-speed={-200}>T</span>
                    <span data-speed={100}>h</span>
                    <span data-speed={200}>e</span>
                    <span className='gap-heading'></span>
                    <span data-speed={200}>P</span>
                    <span data-speed={-200}>e</span>
                    <span data-speed={250}>r</span>
                    <span data-speed={200}>s</span>
                    <span data-speed={-210}>o</span>
                    <span data-speed={140}>n</span>
                </div>
            </footer>
            <section className="about-content">
                <div className="about__wrapp">
                    <div className="about__img">
                        <img src={sirpic} alt={2} />
                    </div>
                    <div className="about__txt">
                        <div className="about__p">
                            <p>
                                Abhilash Modi is an author, co-founder of TILS Education, a creative teacher and most importantly a
                                student of life who loves to unfold the new dimensions of life every day. He has recently been
                                recognized by Rajasthan Patrika paper's 40 under 40 power list in the segment of Education and Best
                                Young Indian Business Leaders by Insights Success. Guinness, Limca and many other Book of World Records
                                have also encrypted Abhilash's name for his several National &amp; World chronicles. Abhilash &amp; his 2
                                students have also created World's first RAP song to learn English - Bhasha to learn English Language in
                                an easier and more mindful manner which was also appreciated by the Ministry of Skill Development and
                                Entrepreneurship of Govt. of India. His 3 research-papers have been recently published in International
                                Journal of English &amp; Studies which is the premier level English Journal of World. His inspirationalstory
                                of becoming an Inspirational teacher from a factory Laborer has been featured by the biggest Indian
                                Media Platform JOSH Talks, biggest Global Media Platform TEDx Talks, INC 91, Startup Times &amp; many more
                                platforms. His core purpose of life is to make people's life easier and happier by learning &amp; living the
                                universal and perennial aspects of life &amp; its attires with the help of UNIVERSAL HUMAN Values.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
