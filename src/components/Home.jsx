import React from 'react'
import Leadership from './Leadership'
import Developement from './Developement'
import Sales from './Sales'
import rightLogo from '../assets/RightMark.svg'



const Home = () => {
  return (
    //   <div className='min-w-[100vw] min-h-screen bg-zinc-600 text-white'>
    //       <div className='flex flex-col items-center p-4 gap-4'>
    //           <div className='bg-[pink] px-10 rounded-xl py-2'>
    //           <h2>Company Name</h2>
    //           </div>
    //           <div className='w-[85vw] text-center'>
    //               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia alias iusto fugiat pariatur blanditiis tempore error deserunt voluptate quae. Doloribus voluptas quasi consectetur iure saepe fugit mollitia at? Hic accusantium praesentium nobis dolorum quo cum fugit incidunt, alias impedit? Quasi neque consectetur in voluptatem a placeat voluptas. Dolore eius debitis doloribus at? Quas labore ea sapiente, doloribus ad harum temporibus.</p>
    //           </div>
              
    //       </div>
    //       <div className='flex w-full justify-center items-center text-center my-4'>
    //           <div className="border-t-4 border-dashed border-[pink] w-[50%]"></div>
    //       </div>
    //       <div className='text-center'>
    //           <h1 className='font-bold'>Meet our Team</h1>
    //           <div className='bg-[pink] inline-block px-4 py-2 rounded-xl mt-4'>
    //               <p>Leardership/Management Team</p>
    //           </div>
    //       </div>
    //       <div>
              
    //       </div>
    //       <Leadership />
    //       <Developement />
    //       <Sales/>                

    // </div>
      <div className='min-w-full font-serif min-h-screen bg-zinc-600 text-white'>
          <div className='flex items-center justify-end'>
              <img className='h-[100px]' src={rightLogo} alt="" />
          </div>
          <div className='flex flex-col items-center p-4 gap-4'>
        <div className='bg-[#ac73b1] px-6 md:px-10 rounded-xl py-2 text-center'>
            <h2 className="text-lg font-bold text-2xl">Company Name</h2>
        </div>
        <div className='w-full md:w-[75vw] text-center'>
            <p className="text-sm md:text-base">Welcome to [Your Company Name], where a dedicated team of prfessionals works together to bring innovation,creativity and expertise to software industry.Get to know the individuals who make our company thrive.</p>
        </div>
    </div>
    <div className='flex w-full justify-center items-center text-center my-4'>
        <div className="border-t-2 md:border-t-4 border-dashed border-[#ac73b1] w-[50%] md:w-[30%]"></div>
    </div>
    <div className='text-center'>
        <h1 className='font-bold text-xl md:text-2xl'>Meet our Team</h1>
        <div className='bg-[#ac73b1] inline-block px-4 py-2 rounded-xl mt-4'>
            <p className="text-sm md:text-base text-xl font-semibold">Leadership/Management Team</p>
        </div>
    </div>
    <div className="w-full">
        <Leadership />
        <Developement />
        <Sales/>
    </div>
</div>

  )
}

export default Home