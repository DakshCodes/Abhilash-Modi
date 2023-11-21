import React from 'react'
import "./Seekh.css"

const Seekh = () => {
  return (
    <main className='main'>
      <section className='mx-auto max-w-[1390px]  my-8'>
        <div className='mx-4  p-4'>
          <div className=''>
            <img className='rounded-xl' src="https://abhilashmodi.com/images/seekh-front.jpg" alt="" />
          </div>

          <div className=' flex-between flex-col-reverse   my-10 py-4'>
            <p className='text-xl mt-8 text-center'>Social Empowerment through Education , Kindness and Heroism </p>
            <img className='shadow-new rounded-xl w-[20rem]  bg-white px-6 py-4' src="https://abhilashmodi.com/images/seekh_logo.png" alt="" />
          </div>


          {/* About Us */}

          <div className='flex flex-col gap-14'>


            <div className=' flex flex-col md:flex-row items-center justify-between px-6'>
              <div className='flex flex-col mt-4 md:w-[50%]'>
                <p className='text-3xl border-b-8 w-fit pb-2 border-[#0000009b] mb-4 font-semibold'>About Us</p>
                <p className='text-justify text-[1.2rem]'>SEEKH is an Indian philanthropic initiative founded in 2018, focusing on medication, free education, career counseling, motivational seminars, public speaking, yoga, street plays, social issues, and collaboration with other NGOs. Affiliated with The Institute of Languages & Skills (TILS), SEEKH stands for Social empowerment through Education, Knowledge, and heroism. Formerly known as Dr. Modi's Motivational Dhaba, it has achieved national and world records while promoting philanthropy and humanity.</p>
              </div>
              <img className='px-4 shadow-new rounded-3xl' src="https://res.cloudinary.com/dazeowi1e/image/upload/v1699254351/blogsImages/erwbri3qqvlhcnclron1.jpg" alt="" />
            </div>


            <div className=' flex flex-col-reverse md:flex-row items-center justify-between px-6'>
              <img className='px-4 shadow-new rounded-3xl w-[33rem]' src="https://res.cloudinary.com/dazeowi1e/image/upload/v1699254366/blogsImages/mmo3qvy0dnhec2ksiuxc.jpg" alt="" />

              <div className='flex flex-col mt-4 md:w-[50%]'>
                <p className='text-3xl border-b-8 w-fit pb-2 border-[#0000009b] mb-4 font-semibold'>Vision</p>
                <ul className='text-justify text-[1.2rem]'>
                  <li>Eradicating the biggest evil of today (Suicide)</li>
                  <li>Social enablement through awareness & motivation</li>
                  <li>Providing access to quality education through its partner TILS</li>
                  <li>Organising free professional seminars (Interview, Group-discussion, PD, PI)</li>
                  <li>Organising many health awareness seminars</li>
                  <li>Creating public speakers for global platform with the collaboration of global platform</li>
                  <li>Felicitation in all fields (Education, Human Endeavour, Social Service etc.)</li>
                </ul>
              </div>
            </div>


            <div className=' flex flex-col md:flex-row items-center justify-between px-6'>

              <div className='flex flex-col mt-4 md:w-[50%]'>
                <p className='text-3xl border-b-8 w-fit pb-2 border-[#0000009b] mb-4 font-semibold'>Mission</p>
                <ul className='text-justify text-[1.2rem]'>
                    <li>In a decade, we have an elite mission to spread ourselves not only in district and state but nation.</li>
                    <li>To enable people to take responsibility for the contemptuous conditions.</li>
                    <li>Motivate to seek resolution through individual and collective action thereby enabling youth to realise their full potential.</li>
                    <li>To make people discover their potential for action and change.</li>
                    <li>To enable peoples’ collective endeavours.</li>
                    <li>To remove social gaffes & modern world related problems from society.</li>
                    <li>To inculcate solitary in youngsters and rooting-up loneliness.</li>
                </ul>
              </div>

              <img className='px-4 shadow-new rounded-3xl w-[33rem]' src="https://res.cloudinary.com/dazeowi1e/image/upload/v1699254379/blogsImages/my5ldyhdm5bvgnpduech.jpg" alt="" />

            </div>

          </div>

        </div>
      </section>
    </main>
  )
}

export default Seekh
