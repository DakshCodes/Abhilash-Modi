import React from 'react'
import { Link } from 'react-router-dom'
import Effortless from '../Effortless'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-footer">
        <div className="row">
          <div className="footer-col">
            <h4>Navigation</h4>
            <ul>
              <Link to={'/'}>
                <li><a href="">Home</a></li>
              </Link>
              <Link to={'/about'}>
                <li><a>about us</a></li>
              </Link>
              <Link to={'/impact'}>
                <li><a>Imapact</a></li>
              </Link>
              <Link to={'/seekh'}>
                <li><a href="#">Seekh</a></li>
              </Link>
            </ul>
          </div>
          <div className="footer-col">
            <h4>help</h4>
            <ul>
              <Link to={'/seekh'}>
                <li><a href="#">Seekh</a></li>
              </Link>
                <li><a target={'_blank'} href="https://www.youtube.com/@abhilashmodi964">Videos</a></li>
              <Link to={'/blogs'}>
                <li><a href="">My Thoughts</a></li>
              </Link>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <ul className="address">
              <li>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
                <p>40,JINENDRA, Ist floor,Behind Circuit House,
                  Opp. Govt.Secondary Boys School
                  Gandhi Nagar, Bhilwara-311001
                </p>
              </li>
              <li>
                <svg className="phone" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    <path d="M18.6038 12.7268L15.5652 9.08666C15.2572 8.69067 15.1032 8.49267 15.0225 8.27061C14.9511 8.07411 14.9215 7.86486 14.9357 7.65628C14.9518 7.42055 15.045 7.18766 15.2313 6.72187L15.942 4.94513C16.2177 4.25581 16.3556 3.91116 16.5934 3.68525C16.8029 3.48618 17.0656 3.3519 17.3496 3.29856C17.672 3.23803 18.0321 3.32806 18.7524 3.50812L20.7197 4.00002C20.7197 14 13.72 21 3.71973 21L3.2281 19.0324C3.04804 18.3122 2.95801 17.952 3.01854 17.6297C3.07188 17.3456 3.20616 17.083 3.40522 16.8734C3.63113 16.6356 3.97579 16.4977 4.66511 16.222L6.25064 15.5878C6.78204 15.3752 7.04773 15.2689 7.31264 15.2608C7.54678 15.2536 7.77934 15.3013 7.99171 15.4002C8.23199 15.512 8.43434 15.7144 8.83904 16.1191L11.9254 19.1569" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
                <p>
                  96108-39421
                </p>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Connect us</h4>
            <div className="social-links">
              <a href="mailto:modiabhilash308@gmail.com" title="modiabhilash308@gmail.com">
                <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    <path stroke="#fff" strokeLinejoin="round" strokeWidth={12} d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z">
                    </path>
                  </g>
                </svg>
              </a>
              <a href="https://www.facebook.com/abhilash.modi.75" target="_blank">
                <svg viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier">
                    <title>facebook [#fff176]</title>
                    <desc>Created with Sketch.</desc>
                    <defs> </defs>
                    <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#fff">
                        <g id="icons" transform="translate(56.000000, 160.000000)">
                          <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#fff176]"> </path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Effortless />
    </footer>


  )
}

export default Footer
