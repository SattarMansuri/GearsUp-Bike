import React from 'react'
import Arrow from '../../public/icons/Arrow'

const RequestForm: React.FC = () => {
  return (
    <form action="" className='flex flex-col gap-8 w-full xl:px-[175px] lg:px-32 md:px-16 px-5'>
     <div className='flex md:flex-row flex-col gap-5'>
        <div className='flex flex-col gap-3'>
         <label htmlFor="name" className='text-sm font-Inter'>Name</label>
         <input type="text" name="" id="" className='bg-[#F4F4F4] border-[0.5px] border-[#9F9F9F] xl:w-[536px] lg:w-[400px] md:w-80 w-full outline-0 h-[46px] rounded-md p-2' />
        </div>
         <div className='flex flex-col gap-3'>
         <label htmlFor="email" className='text-sm font-Inter'>Email</label>
         <input type="email" name="" id="" className='bg-[#F4F4F4] border-[0.5px] border-[#9F9F9F] xl:w-[536px] lg:w-[400px] md:w-80 w-full outline-0 h-[46px] rounded-md p-2' />
        </div>
     </div>
       <div className='flex md:flex-row flex-col gap-5'>
        <div className='flex flex-col gap-3'>
         <label htmlFor="Phone" className='text-sm font-Inter'>Phone Number</label>
         <input type="tel" name="" id="" className='bg-[#F4F4F4] border-[0.5px] border-[#9F9F9F] xl:w-[536px] lg:w-[400px] md:w-80 w-full outline-0 h-[46px] rounded-md p-2' />
        </div>
         <div className='flex flex-col gap-3'>
         <label htmlFor="Time" className='text-sm font-Inter'>Time Frame <sup className='text-[9px] text-red-600'>*</sup></label>
         <input type="time" name="" id="" className='bg-[#F4F4F4] border-[0.5px] border-[#9F9F9F] xl:w-[536px] lg:w-[400px] md:w-80 w-full outline-0 h-[46px] rounded-md p-2' />
        </div>
     </div>
       <div className='flex md:flex-row flex-col gap-5'>
        <div className='flex flex-col gap-3'>
         <label htmlFor="size" className='text-sm font-Inter'>Size <sup className='text-[9px] text-red-600'>*</sup></label>
         <input type="text" name="" id="" className='bg-[#F4F4F4] border-[0.5px] border-[#9F9F9F] xl:w-[536px] lg:w-[400px] md:w-80 w-full outline-0 h-[46px] rounded-md p-2' />
        </div>
         <div className='flex flex-col gap-3'>
         <label htmlFor="quantity" className='text-sm font-Inter'>Quantity <sup className='text-[9px] text-red-600'>*</sup></label>
         <input type="email" name="" id="" className='bg-[#F4F4F4] border-[0.5px] border-[#9F9F9F] xl:w-[536px] lg:w-[400px] md:w-80 w-full outline-0 h-[46px] rounded-md p-2' />
        </div>
     </div>
     <div className='flex flex-col gap-3 mb-10'>
       <label htmlFor="size" className='text-sm font-Inter'>Please Describe Your Project <sup className='text-[9px] text-red-600'>*</sup></label>
       <textarea name="" id="" className='xl:h-[229px] resize-none lg:h-52 md:h-44 h-40 bg-[#F4F4F4] border-[0.5px] border-[#9F9F9F] outline-0 rounded-md p-2'></textarea>
     </div>
     <p className='md:text-lg font-Inter text-center'>
       By submitting this form you agree to our <span className='cursor-pointer underline '>Terms of services</span> and <span className='cursor-pointer underline '>Privacy Policy</span>
     </p>
     <div className='mt-10 flex justify-center items-center'>
      <button className="bg-[#1959AC] hover:bg-blue-400 transition-colors w-[179px] h-[38px] text-white font-bold font-Inter text-[15px] flex justify-center items-center gap-3 rounded-[5px] cursor-pointer">
          Loerum Ipsum <Arrow />
         </button>
     </div>
    </form>
  )
}

export default RequestForm