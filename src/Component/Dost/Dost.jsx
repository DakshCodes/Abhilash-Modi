import React from 'react'
import './Dost.css'
import { motion } from 'framer-motion'

const Dost = () => {
    return (<div className='dost-main'>
        <div className='dost-poster'>
        </div>
        <motion.p
            initial={{
                opacity: 0,
                y: 80
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.9 }
            }}
            className='query-para'>It is too common to have some queries related to our personal & professional life that we are not able to get the solutions of.
            Kindly fill up the form and share your problem here, shortly you will be allotted a time and then contacted by Our DOSTS in order to get your questions’ most appropriate answers from them with the help of their years of vast and problem-solving experience.
        </motion.p>
        <motion.div
            initial={{
                opacity: 0,
                y: 80
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.9 }
            }}
            id="container">
            <h1>• Share Your Problem here •</h1>
            <div className="underline">
            </div>
            <form action="#" method="post" id="contact_form">
                <div className="name">
                    <label htmlFor="name" />
                    <input type="text" placeholder="My name is" name="name" id="name_input" required />
                </div>
                <div className="email">
                    <label htmlFor="email" />
                    <input type="text" placeholder="My conatact no." name="email" id="email_input" required />
                </div>
                <div className="telephone">
                    <label htmlFor="name" />
                    <input type="text" placeholder="My whatsapp no." name="telephone" id="telephone_input" required />
                </div>
                <div className="telephone">
                    <label htmlFor="name" />
                    <input type="text" placeholder="My Age" name="telephone" id="telephone_input" required />
                </div>
                <div className="telephone">
                    <label htmlFor="name" />
                    <input type="text" placeholder="My Profession / Qualification" name="telephone" id="telephone_input" required />
                </div>
                <div className="subject">
                    <label htmlFor="subject" />
                    <select placeholder="Gender" name="Gender" id="subject_input" required>
                        <option disabled hidden selected>Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div className="telephone">
                    <label htmlFor="name" />
                    <input type="text" placeholder="My City" name="telephone" id="telephone_input" required />
                </div>

                <div className="message">
                    <label htmlFor="message" />
                    <textarea name="message" placeholder="Type Your Query / Problem here (In english or texting language)" id="message_input" cols={30} rows={5} required defaultValue={""} />
                </div>
                <div className="submit">
                    <input type="submit" defaultValue="Send Message" id="form_button" />
                </div>
            </form>
        </motion.div>
    </div>
    )
}

export default Dost
