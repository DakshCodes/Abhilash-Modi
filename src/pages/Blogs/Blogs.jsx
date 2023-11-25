import React, { useEffect, useState } from 'react'
import "../Blogs/Blogs.css"
import { BsArrowUpRight } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { Getblogs } from '../../apicalls/blogs'


// const blogsData = [
//   {
//     img: "https://shorturl.at/elHTV",
//     heading: "How to stay motivated all the time ?",
//     startLines: "Motivation, A power to push ourselves to do better on tomorrow than today. It is a prime tool in this world, which makes “superhuman” to every common human. Motivation is an unbeatable energy or enthusiasm that has made people pioneer, which is making & which will keep making. It is the only power to create great not just best.",
//   },
//   {
//     img: "https://shorturl.at/lmrFO",
//     heading: "ENTERTAINMENT V/S HAPPINESS",
//     startLines: "Human is searching happiness everywhere, sometimes in worthless parties, in mooching around, in making FB friends, in chatting hours to unknown person, in putting-on funky dresses, in having luxurious and fastest cars, biggest bungalow, coolest clothes, in clicking some selfies to pageant their external beauty which has given by god, ",
//   },
//   {
//     img: "https://shorturl.at/jmqJ2",
//     heading: "How to Immediately Change Your Life for The Better?",
//     startLines: "A big Irony of this era's people is this, that their “WHY” factor is not clear and bigger Irony is this, that they don't know about importance of knowing the reason before doing any work and the biggest irony is, so many people even don't want to know. If you do not have a clear to do something, ",
//   },
//   {
//     img: "https://shorturl.at/fBCO9",
//     heading: "How to improve employability skills ?",
//     startLines: "mployability is an ability, which teaches us how to acquire a job, how to stay in job with a happy heart, not reluctantly & how to become the preeminent employee or employer of organization. The irony is this, that people do not have employability to employ and they keep cursing employees and employers or sometimes market conditions.",
//   },
//   {
//     img: "https:// rb.gy/gea7d",
//     heading: "How to manage your Anger?",
//     startLines: "Anger is nothing more than a Ghost that controls a human and makes human do work accordingly and during it human has no control on whatever he/she does",
//   },
//   {
//     img: "https://rb.gy/ozrn8",
//     heading: "Tips to manage time",
//     startLines: "Time cannot be MANAGED, it can just be INVESTED, we have to manage ourselves as per time so this management must be known as “SELF MANAGEMENT",
//   },
//   {
//     img: "https://rb.gy/7rphs",
//     heading: "How to prepare for interview for freshers? ",
//     startLines: "On every now and then, keep wearing those type of dresses which you are going to wear in Interview, It will help you to feel comfortable. Example: you have a habit to wear only Jeans. Before interview, try to wear 5 to 7 time Pants or trousers, once you'll start feeling comfortable",
//   },
//   {
//     img: "https://rb.gy/qm4r4",
//     heading: "Personality Development Tips",
//     startLines: "Personality development is not about having a good looking or dashing or gorgeous appearance, it is about having nil in appearance but having a great communication, chaste heart, helping nature, appreciation, motivation and the most important positive thinking in the most negative conditions of life",
//   },
//   {
//     img: "https://shorturl.at/puTX3",
//     heading: "Ways to Improve Your Body Language",
//     startLines: "Action Speak louder than words is true in this case. Body Language goes in both ways. Body Language can help you to read others feelings and others can read you and your feeling that is why it goes in both ways",
//   },
//   {
//     img: "https://rb.gy/3ror8",
//     heading: "Effective Communication Skills for Workplace Success",
//     startLines: "Speak in such a manner that people will love to listen you and Listen in such a manner that people will love to speak to you . As we all know communication is of two ways, not just one way. First way is about listening and Second way is about speaking. ",
//   },

//   {
//     img: "https://img.freepik.com/free-vector/woman-resume-with-magnifier-table-cv-resume-concept-finding-worker-apply-job-business-opportunity-cv-profile_613284-42.jpg?w=740&t=st=1698052308~exp=1698052908~hmac=dfdf40d3053f1e4a1c1c62e61ec9db732aa812f8619b34b473cde2d705e8edc4",
//     heading: "How to Make a Resume/ Curriculum-Vitae for a Job ?",
//     startLines: "Resume, a letter, which contains your Career Objective, Virtues, Credentials, Professional Qualification, Academic Qualification and Personal Dossier in an appropriate sequence. Curriculum Vitae, ",
//   },
//   {
//     img: "https://img.freepik.com/free-vector/lettering-quote-design_23-2147746493.jpg?w=740&t=st=1698052392~exp=1698052992~hmac=67daeb969e751ae590a5168b0270f2fc43f7db3524125c6e54ab54960ab08b03",
//     heading: "When can be the happiest day in your life?",
//     startLines: "Let's focus on gaining permanent happiness instead of getting temporary fun When you achieve something",
//   },
//   {
//     img: "https://tinyurl.com/mum2z2js",
//     heading: "How to Improve English Speaking and Writing Skills ?",
//     startLines: "When we get to know about WHY factors. It gets so late. English is way of communication to express view with one another. It is a medium to put our notion in front of those people who come across us in our life. ",
//   },
//   {
//     img: "https://tinyurl.com/mp3amjaz",
//     heading: "What is the real meaning of Success in life?",
//     startLines: "Success differs from person to person. First of all Let's try to know, what is the need of success. Is it to get happiness, to get identification?",
//   },
//   {
//     img: "https://tinyurl.com/r7dtpdm2",
//     heading: "How to Remove Fear of Public Speaking?",
//     startLines: "The best way to get rid of fear is to face it ,First, you have to know the exact type of fear you are having which kinds of fear is this actually. Is it like, what if I will speak wrong, or it is like everyone is better than me",
//   },
//   {
//     img: "https://shorturl.at/pu TX3",
//     heading: "Indian superstitions and the theories behind them: Not to be missed",
//     startLines: "Believing blindly on an illogical thing is called superstition, Our India; we may give the no. one position to our India in case of superstition. Some examples: - No. 13 is so unlucky don’t initiate any good work on this date,",
//   },
//   {
//     img: "https://tinyurl.com/4zdcap93",
//     heading: "How to deal with Peer Pressure?",
//     startLines: "It simply means an IMPOSED WORK.Peer pressure, in our language we may give it the name of our neighbours pressure. It means IMPOSED WORK. In this, parents do not listen to their children what they want to do",
//   },


// ]

const Blogs = () => {
  const [scroll, setScroll] = useState("")
  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    setScroll(scrollPosition);
  };

  const [blogsData, setBlogsData] = useState([]);

  const getData = async () => {
    try {
      const response = await Getblogs();
      if (response.success) {
        setBlogsData(response.data)
      } else {
      }

    } catch (error) {
      console.log(error.message);
    }

    // Add code here to upload the file to your server or perform other file-related operations.
  };

  useEffect(() => {
    handleScroll();
    getData();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // This line will scroll the window to the top
}, [])
  return (
    <main className='blog-container'>

      {/* top banner */}
      <div className=' border-red-500 h-fit'>

        <div className='banner'>

        </div>

      </div>

      <div className='quote'>
        <p className='text-3xl'>" Explore my thoughts by the blogs "</p>
      </div>
      {/* search bar */}
      <div className={`search  ${scroll > 657 ? " boxShadow rounded-b-[1.5rem]" : ""}`}>

        <div className={`border border-black w-full h-[3rem] flex items-center text-lg px-4 py-2 rounded-full`}>
          <input
            className='outline-none border-none h-full w-full '
            type="text" placeholder={"Search"} />
        </div>
      </div>

      {/* Blog card */}

      <div className='blogs'>
        {
          blogsData.map((item, index) => {
            return (
              <>
                <div className='blog-card  hover:transition-all hover:ease-in-out hover:duration-300 bg-white'>
                  {/* <div className='blog-image'> */}
                  <img src={item.blog_thumbnail} alt="" />
                  {/* </div> */}

                  <div className='title'>
                    <h2>{item.blog_title}</h2>
                  </div>



                  <div className='introlines'>
                    <p>{item.blog_description}</p>
                  </div>
                  <div className='title-f mt-4'>
                    <h2>Category : {item.blog_category}</h2>
                  </div>

                  <div className='my-6 text-xl rounded-lg border-[1.8px] border-black hover:bg-black hover:text-white h-[3rem] flex items-center justify-center w-[12rem]'>
                    <Link to={`/blogs/${item._id}`}> <button className='w-full h-full flex items-center justify-center gap-4'>Read More <BsArrowUpRight /></button></Link>
                    {/* <BsArrowUpRight className='mr-4 text-xl' /> */}
                  </div>
                </div>
              </>
            );
          })
        }


      </div>
    </main>
  )
}

export default Blogs
