import React from 'react'
import profileimg from '../assets/profile-img.png'

const Card = ({name,role,status}) => {
  return (
    //   <div>
    //       <div className='container w-[15vh] bg-white h-[15vh] rounded-full overflow-hidden'>
    //           <img className='object-cover  ' src={profileimg} alt="profile.img" />
    //       </div>
    //       <h1>[Founder Name]</h1>
    //       <p>Founder/CEO</p>
      // </div>
      <div className='flex flex-col items-center'>
            <div className='container w-[15vh] h-[15vh] bg-white rounded-full overflow-hidden'>
                <img className='object-cover w-full h-full' src={profileimg} alt="profile.img" />
            </div>
      <h1 className="text-lg md:text-xl mt-2">{name}</h1>
      <p className="text-sm md:text-base">{role}</p>
      <p className="text-sm md:text-base">{status}</p>

        </div>
  )
}

export default Card