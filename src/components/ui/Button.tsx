import React from 'react'
import Navbar from '../Navbar'

const Button = () => {
  return (
    <div id='button' className='min-h-screen bg-no-repeat bg-[url(/my_pic.png)] bg-right lg:bg-[20%] bg-cover'
    style={{backgroundSize: "55%"}}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
        <div className='hidden lg:block' ></div>
        <div className='text-[70px] sm:text-[90px] font-bold leading-tight flex items-center text-left'>
          <div>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">MUSHK</p>
            <p data-aos="zoom-in-up">ZEHRA</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Button
