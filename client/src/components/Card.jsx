import React from 'react'
import chip from '../assets/chip.png'
import wifi from '../assets/wifi.png'
import masterCard from '../assets/mastercard-2.svg'

const Card = () => {
  return (
    <div className='xl:w-[17%] lg:w-[24%] w-[70%] z-[12] bg-[#fcfcfc] lg:absolute top-[9%]  h-[40vh] rounded-xl px-[5%] lg:px-[1%] flex flex-col justify-between  '>
        <div className='flex justify-between items-center pt-[5%]'>
            <img src={chip} alt='chip' className='h-[5vh] w-[5vh] ml-[2%] mt-[2%]' />
            <img src={wifi} alt='wifi' className='h-[3vh] w-[3vh] ml-[2%] mt-[2%]' />
        </div>
        <div>
            <div className='text-left'>
                <h3>Jonathan Michael</h3>
                <p><span>••••••</span> 3456</p>
            </div>
            <div className='flex justify-between items-center py-[5%]'>
                <h3>09/22</h3>
                <img src={masterCard} alt='masterCard' className='h-[5vh] w-[5vh] ml-[2%] mt-[2%]' />
            </div>
        </div>
        
       
    </div>
  )
}

export default Card