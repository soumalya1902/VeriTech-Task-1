import React from 'react'
import Card from './Card'
import leftLogo from '../assets/LeftMark.svg'


const Developement = () => {
  return (
      <>
          <div className='card-container text-center w-full'>
            <div className='heading flex text-center flex-wrap sm:gap-[30vw] gap-0 w-full'>
                  <img className='h-[100px]' src={leftLogo} alt="" />
                <div className='title ml-[20%] sm:ml-0 text-center py-2 px-4 m-8 rounded-xl bg-[#ac73b1]'>
                  <h1 className='text-xl font-semibold'>Developement Team</h1>
                </div>
            </div>
              <div className='flex flex-wrap text-center justify-center py-8 px-4 gap-[10vw] '>
                  <Card name='[Developer Name]' role='Team Lead,SE'/>
                  <Card name='[Developer Name]' role='Software Engineer'/>
                  <Card name='[Developer Name]' role='Software Engineer'/>
                  <Card name='[Developer Name]' role='Software Engineer'/>
              </div>
              <div className='flex flex-wrap text-center justify-center p-4 gap-[10vw]'>
                  <Card name='[Developer Name]' role='Software Engineer '/>
                  <Card name='[Developer Name]' role='Software Engineer'/>
                  <Card name='[Developer Name]' role='Software Engineer'/>
              </div>
               

            </div>
      </>
  )
}

export default Developement