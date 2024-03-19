import React from 'react'
import Card from './Card'

const Leadership = () => {
  return (
      <>
          <div className='card-container w-full'>
              <div className='flex text-center justify-center py-8 px-4 gap-[10vw] '>
                  <Card name='[Founder Name]' role='Founder/CEO' />
                  <Card name='[Founder Name]' role='Founder/CEO' />
              </div>
              <div className='flex flex-wrap text-center justify-center p-4 gap-[10vw]'>
                  <Card name='[ VP Name ]' role='VP,Developement &' status='Growth' />
                  <Card name='[ VP Name ]' role='VP,Sales &' status='Marketing' />
                  <Card name='[ VP Name ]' role='VP,Finance &' status='Operation' />
              </div>
               

            </div>
        </>
    //   <>
    //         <div className='card-container w-full'>
    //             <div className='flex flex-col md:flex-row text-center justify-center py-8 px-4 md:gap-[10vw] '>
    //                 <Card />
    //                 <Card/>
    //             </div>
    //             <div className='flex flex-col md:flex-row text-center justify-center p-4 md:gap-[10vw]'>
    //                 <Card />
    //                 <Card />
    //                 <Card />
    //             </div>
    //         </div>
    //     </>
  )
}

export default Leadership