import Image from 'next/image'
import logo from '../../public/images/logo.png'
import DownArrow from '../../public/icons/downArrow'

const Header: React.FC = () => {
  return (
    <header className='font-Inter flex justify-between items-center 2xl:px-20 2xl:py-5 xl:px-9 lg:px-8 md:px-7 px-5 absolute z-50 max-w-[1440px] w-full'>
      <div className='max-h-[60px] w-[156px] overflow-hidden'>
        <Image src={logo} alt='logo Image' className='h-full w-full object-cover' placeholder='blur' />
      </div>
      <div className='flex gap-6 items-center text-lg link-primary'>
       <div className='flex items-center gap-1 cursor-pointer'>
          Lorem Ipsum <DownArrow />
       </div>
       <div className='flex items-center gap-1 cursor-pointer'>
          Lorem Ipsum <DownArrow />
       </div>
       <div className='flex items-center gap-1 cursor-pointer'>
          Lorem Ipsum <DownArrow />
       </div>
      </div>
      <div className='ml-28'>
        <button className='h-[38px] w-[125px] text-[15px] font-bold shadow-xs bg-white rounded-[5px] hover:bg-gray-100 transition-colors cursor-pointer'>
          Sign In
        </button>
      </div>
    </header>
  )
}

export default Header