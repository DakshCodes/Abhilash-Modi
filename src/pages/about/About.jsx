import React, { useRef, useEffect } from "react";

import slide_image_1 from "../../assets/0.png";
import slide_image_2 from "../../assets/1.png";
import slide_image_3 from "../../assets/2.png";
import slide_image_4 from "../../assets/5.png";
import slide_image_5 from "../../assets/6.png";
import slide_image_6 from "../../assets/7.png";
import slide_image_7 from "../../assets/8.png";
import slide_image_8 from "../../assets/9.png";
import slide_image_9 from "../../assets/10.png";
import slide_image_10 from "../../assets/12.png";
import slide_image_11 from "../../assets/13.png";
import slide_image_12 from "../../assets/15.png";
import slide_image_13 from "../../assets/18.png";
import slide_image_14 from "../../assets/20.png";
import slide_image_15 from "../../assets/22.png";
import slide_image_16 from "../../assets/24.png";
import slide_image_17 from "../../assets/25.png";
import slide_image_18 from "../../assets/27.png";
import slide_image_19 from "../../assets/400.png";
import slide_image_20 from "../../assets/800.png";
import slide_image_21 from "../../assets/patrika40.jpg";


import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../../App.css";

import { EffectCoverflow, Autoplay, Pagination } from "swiper/modules";

import "react-vertical-timeline-component/style.min.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// import required modules

const About = () => {
  const page3 = useRef(null);
  const image = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 3000 });
    window.scrollTo(0, 0); // This line will scroll the window to the top
  }, []);

  return (
    <div className="main">
      <h1 className="text-center text-6xl pt-10 font-extrabold">
        AWARDS & RECOGINITION &darr;
      </h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="pic1" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="pic2" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="pic3" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="pic4" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="pic5" className="photos" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={slide_image_6} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_8} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_9} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_10} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_11} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_12} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_13} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_14} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_15} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_16} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_17} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_18} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_19} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_20} alt="pic5" className="photos" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_21} alt="pic5" className="photos" />
        </SwiperSlide>
      </Swiper>

      <h1 className="text-center text-6xl pt-10 font-extrabold">
        THE JOURNEY &darr;
      </h1>

      <div className="journey">
        <ul>
          <li data-aos="fade-down">
            <div>
              <p>
                He was born and brought up in lower middle-class family while
                seeing struggle for getting even basic things. His father was a
                journalist and his mother was a less paid but very respected
                teacher in the same school where he studied.
              </p>
            </div>
          </li>

          <li data-aos="fade-down">
            <div>
              <p>
                When he was pursuing his schooling, he got to see his parents
                writing a book of English Grammar named” Navdeep” which was
                really competent in that time but that book was a beautiful
                failure for them.After living 10 years in Jaipur, his family
                migrated from Jaipur to the textile city of Rajasthan
              </p>
            </div>
          </li>

          <li data-aos="fade-down">
            <div>
              <p>
                due to financial problem his whole schooling got completed in
                govt. schools by being an average student who would get
                percentage of 70 to 75 which was not fit in the parameters of
                that competitive aura but he would get fascinated from some of
                the teachers who used to motivate and talk about some
                inspirational personalities , They were few but were so much
                inspiring for him.
              </p>
            </div>
          </li>

          <li data-aos="fade-down">
            <div>
              <p>
                Due to Financial problem and an invisible but strong pressure to
                do something in life, he started working in factory as a labour
                to take the first step to improve the financial condition of
                family. He was in a tremendous pressure to prove that poor can
                also do something.
              </p>
            </div>
          </li>

          <li data-aos="fade-down">
            <div>
              <p>
                In factory, He learnt the tendency of doing hard work and the
                importance of knowing the practical meaning of punctuality, time
                management, anger management, discipline that all couldn’t help
                him that time but helped him so much to make him what he is
                today. He used to keep motivating himself to work hard in
                hardships of his life too.
              </p>
            </div>
          </li>

          <li data-aos="fade-down">
            <div>
              <p>
                God had a different plan for him which he realized later after
                becoming motivational speaker. One small incident of Abhilash’s
                life which is so inspiring is this that once when he was in
                overtime of 48 hours, it was biting cold and clock was showing 2
                am in dark night of January, He was told to sleep but he didn’t
                get any cloth to cover his body so he covered his body from two
                plastic sacks and anyhow managed to sleep.
              </p>
            </div>
          </li>

          <li data-aos="fade-down">
            <div>
              <p>
                after working for 4 years in factory, One fine day he was in
                over time of 72 hours and he had forgotten his entity as an
                individual completely but suddenly his boss asked him to do
                something and his tired body suddenly pronounced “ He is
                suffering from fever” and his boss said ,You are educated enough
                as he was also continuing his graduation and was on the edge to
                complete his graduation.
              </p>
            </div>
          </li>

          <li data-aos="fade-down">
            <div>
              <p>
                He thought to not only learn but master English to improve his
                personality while working in factory. He never knew that he may
                become a Public Speaking Trainer but his teacher Mr. Vijay
                Kumawat motivated him and god graced him with an opportunity to
                become an Public Speaking Trainer in 2010.
              </p>
            </div>
          </li>

          <li data-aos="fade-down">
            <div>
              <p>
                In 2013 after defeating the fear of failure of his parents’ book
                of 1996 he wrote an English book Named Just Speak “Speak global,
                be global, later on, it crowned him with Global Award-2015 that
                gave him strength and confidence to do better for society.
                Later, he authored one more book named “Will Development” to
                make people aware about importance of Will over Skills.
              </p>
            </div>
          </li>

          <li data-aos="fade-down">
            <div>
              <p>
                He thought to not only learn but master English to improve his
                personality while working in factory. He never knew that he may
                become a Public Speaking Trainer but his teacher Mr. Vijay
                Kumawat motivated him and god graced him with an opportunity to
                become an Public Speaking Trainer in 2010.
              </p>
            </div>
          </li>

          <li data-aos="fade-down">
            <div>
              <p>
                Since year 2014 to 2022 he made several National and World
                records in many categories. He has guided to thousands of
                individuals including CAs, CS, MBAs, Doctors, Ph. D. holders,
                Govt. Officials, DEOs, Politicians, Engineers, IIT students, IIM
                students, Lawyers, Fashion Designers, Bankers & all age
                students.
              </p>
            </div>
          </li>

          <li data-aos="fade-down">
            <div>
              <p>
                Abhilash believes that although he has been teaching English as
                a skill since 2011 but the journey to teach English and life in
                the same classroom was very difficult, but as the students
                started seeing positive changes in themselves along with
                learning English, their attention got focused on improving
                personality too.
              </p>
            </div>
          </li>

          <li data-aos="fade-down">
            <div>
              <p>
                He truly believes that he has only one objective from the
                beginning that his life should become an inspiration for others.
                Abhilash co-founded TILS - The institute of Languages & Skills
                with Mr. Abhishek Kankria in the year 2017, and since its
                inception, TILS has been achieving new heights.
              </p>
            </div>
          </li>

          <li data-aos="fade-down">
            <div>
              <p>
                TILS has trained thousands of students in its offline & online
                classes including from more than 16 countries. Abhilash believes
                that every human existentially has only one goal; to be resolved
                in himself, to be complaint-free in the family & to be
                prosperous in a job or business.
              </p>
            </div>
          </li>

          <li data-aos="fade-down">
            <div>
              <p>
                He truly believes that he has only one objective from the
                beginning that his life should become an inspiration for others.
                Abhilash co-founded TILS - The institute of Languages & Skills
                with Mr. Abhishek Kankria in the year 2017, and since its
                inception, TILS has been achieving new heights.
              </p>
            </div>
          </li>

          <li data-aos="fade-down">
            <div>
              <p>
                if all these three happen to everyone then society will
                automatically attain fearlessness. Everyone will have to work
                hard towards this goal so that generation after generation we
                could see better humans. He has the motto to convey the
                importance of universally & perennially correct mentality along
                with survival skills in education.
              </p>
            </div>
          </li>
        </ul>
      </div>

      {/* //the milestones */}

      <h1 className="text-center text-6xl pt-10 font-extrabold">
        THE MILESTONES &darr;
      </h1>
      <div className="page3">

        <div className="text" >
          <div className="textbox">
            In year 2014, on occasion of Teachers’ day (5th Sept.) created
            national record in Longest Teaching Marathon- English by teaching 27
            hours continuously and entered in India book of Records.
          </div>
          <div className="textbox">
            In year 2015 March, Got Honorary Doctorate Degree (Ph.D.) from World
            Record University, London (U.K.) on making a World Record by
            Teaching 27 Hours continuously.
          </div>
          <div className="textbox">
            Got name published with Honourable Prime Minister Narendra Modi on
            IBR’s editorial’s page.
          </div>
          <div className="textbox">
            In year 2015, on occasion of Teachers’ day (5th Sept.) created
            national and world record in Longest Non-Stop cleaning Marathon by
            cleaning 28 hours continuously and entered in Limca book of Records
            & India book of Records.
          </div>
          <div className="textbox">
            In same year created India’s Largest Broom and to support Cleaning
            Campaign and entered Limca Book of records and India book of
            records.
          </div>
          <div className="textbox">
            Got GLOBAL AWARD-2015 to write a book of Spoken English and entitled
            as “YOUNGEST ENGLISH WRITER OF INDIA”
          </div>
          <div className="textbox">
            In year 2016 created 29 ft. World’s largest pen on Occasion of
            Teachers’ day (5th Sept.) and broke Guinness world record & entered
            in Asia book of Records.
          </div>
          <div className="textbox">
            Won Youth Excellence award-2016 & Leader of tomorrow title by Suresh
            Gyan Vihar University & Youth Federation in Jaipur.
          </div>
          <div className="textbox">
            He has Created World’s Largest Memento to dedicate it to all 3
            defence forces on 5th sept 2017 at Bhilwara in Rajasthan, India and
            entered in Limca Book of World Record.
          </div>
          <div className="textbox">
            He has been felicitated by India Book of Records in a Gala Ceremony
            named Indian Record holders at World Stage in Delhi, India by Health
            Minister of Delhi.
          </div>
          <div className="textbox">
            He has received Appreciation Letter and honour by Institute of
            Chartered Accountant of India for Motivating Students of this
            profession.Had been featured as CITY PRIDE by Rajsthan Patrika News
            paper. Had been featured as SHAKHSIYAT by a newspaper Jagruk Janta.
          </div>
          <div className="textbox">
            He has been awarded as one of the best faculties at ICAI. He has
            delivered motivational speeches to Govt. teachers (Third grade &
            Second grade) His Idea of Innovation in Education got selected in
            Top-20 at Digifest ( Eduhack) in Bikaner. He has been a JOSH TALKS
            (listed start-up by forbes) speaker. He has won URF annual award
            “Hall of Fame” 2018 by Universal Record Forum in 2019. He has
            created Guinness World Record in Word Power.
          </div>
          <div className="textbox">
            International School Award-Dubai honoured him for his contribution
            towards the educational community. Invited for TEDx Speech at Delhi
            University at an event TEDxDSC in 2020. Got honored by MSDE Ministry
            of Govt. of India for creating World’s First Rap song – Bhasha to
            Learn English in 2021. Recognized by Patrika 40 under 40 power list
            in the segment of Education in 2022. Got featured by Insight Success
            Magazine 40 under 40 list of Best Young Indian Business Leaders in
            2023.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
