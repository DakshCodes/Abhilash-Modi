import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetblogsByID } from '../../apicalls/blogs';
import "./Blogs.css";
import moment from 'moment';

const SingleBlog = () => {
  const paramas = useParams()
  const url = paramas.id;
  // const content = "this is my new blog \n this is next line \n let see what happens next in the third line"

  const [blogsData, setBlogsData] = useState([]);


  const getData = async () => {
    try {
      const response = await GetblogsByID(url);
      if (response.success) {
        setBlogsData(response.data)
        console.log(response.data)
      } else {
        console.log(response.mssage);
      }

    } catch (error) {
      console.log(error.message);
    }

    // Add code here to upload the file to your server or perform other file-related operations.
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className=''>
      <div className='max-w-[1290px]  mx-auto my-[1~rem] p-0 border-green-500'>
        <div className='p-0 w-[100%]'>


          <div className='singleBlog'>
            <img src={blogsData.blog_thumbnail} alt="" />
          </div>

          <div className=''>
            <img className='absolute top-[8rem] md:top-[10rem] rounded-2xl left-[10%] w-[80%] h-[550px] object-cover object-center' src={blogsData.blog_thumbnail} alt="" />
          </div>

          <div className='px-4 text-justify mt-[13rem]  border-red-500'>

            <div className='mb-4 text-center'>
              <h1 className='font-bold text-5xl'>{blogsData.blog_title}</h1>
              <div className='flex items-center gap-4 text-center justify-center'>

                <div className='text-sm my-2 text-gray-400'>Author : Dr. Abhilash Modi </div>
                <div className='text-sm my-2 text-gray-400'>Added on : {moment(blogsData.createdAt).format("DD MMMM YYYY")}</div>
              </div>
            </div>

            <div>
              {blogsData.blog_description}
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default SingleBlog
