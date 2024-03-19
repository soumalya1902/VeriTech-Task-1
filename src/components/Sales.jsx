import React from 'react'
import Card from './Card'
import rightLogo from '../assets/RightMark.svg'
import leftLogo from '../assets/LeftMark.svg'

const Developement = () => {
  return (
      <>
          <div className='card-container text-center w-full'>
              <div className='flex flex-wrap justify-end sm:gap-[28vw] gap-0'>
                  <div className='title text-center  mr-[15%] sm:mr-0 inline-block py-2 px-4 m-8 rounded-xl bg-[#ac73b1]'>
                  <h1 className='text-xl text-center sm:text-left font-semibold'>Sales and Marketing Team</h1>
                  </div>
                  <img className='h-[100px]' src={rightLogo} alt="" />
              </div>
              
              <div className='flex flex-wrap text-center justify-center py-8 px-4 gap-[10vw] '>
                  <Card name='[Employee Name]' role='Team Lead' />
                  <Card name='[Employee Name]' role='Sales Officer' />
                  <Card name='[Employee Name]' role='Sales Officer' />
                  <Card name='[Employee Name]' role='Sales Officer' />
              </div>
              <div className='flex flex-wrap text-center justify-center p-4 gap-[10vw]'>
                  <Card name='[Founder Name]' role='Marketing Officer'/>
                  <Card name='[Founder Name]' role='Marketing Officer'/>
                  <Card name='[Founder Name]' role='Marketing Officer'/>
              </div>
              <img className='h-[100px]' src={leftLogo} alt="" />
               

            </div>
      </>
  )
}

export default Developement