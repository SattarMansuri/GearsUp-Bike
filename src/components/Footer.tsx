import Image from 'next/image'
import logo from '../../public/images/logo.png'

const Footer = () => {
  return (
    <footer className='bg-[#171E2B] lg:px-20 md:px-12 px-5 pt-10 pb-52'>
     <Image src={logo} alt="GearUp logo" className='max-w-[156px] object-cover' />
     <div className='mt-5 flex md:gap-28 sm:gap-20 gap-10 lg:ml-80 md:ml-52 sm:ml-16 ml-5 flex-wrap'>
   {
    [...Array(2)].map((_, i)=>(
           <div key={i} className='flex flex-col gap-5 text-white'>
        <h3 className='font-Inter text-xl font-bold cursor-pointer hover:text-gray-400 transition-colors'>
            Lorem Ipsum
        </h3>
        <ul className='flex flex-col gap-3'>
            {
                [...Array(5)].map((_, i)=>(
                    <li key={i} className='md:text-lg text-base foont-inter cursor-pointer hover:text-gray-400 transition-colors'>Lorem Ipsum</li>
                ))
            }
        </ul>
      </div>
    ))
   }
      <div className='flex flex-col gap-5 text-white'>
        <h3 className='font-Inter text-xl font-bold cursor-pointer hover:text-gray-400 transition-colors'>
            Lorem Ipsum
        </h3>
        <ul className='flex flex-col gap-3'>
            {
                [...Array(3)].map((_, i)=>(
                    <li key={i} className='md:text-lg text-base foont-inter cursor-pointer hover:text-gray-400 transition-colors'>Lorem Ipsum</li>
                ))
            }
        </ul>
      </div>
             <div className='flex flex-col gap-5 text-white'>
        <h3 className='font-Inter text-xl font-bold cursor-pointer hover:text-gray-400 transition-colors'>
            Lorem Ipsum
        </h3>
        <ul className='flex flex-col gap-3'>
                    <li className='md:text-lg text-base foont-inter cursor-pointer hover:text-gray-400 transition-colors'>Lorem Ipsum</li>
        </ul>
      </div>
     </div>
    </footer>
  )
}

export default Footer