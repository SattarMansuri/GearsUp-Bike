import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

interface ServicesCards{
    image: StaticImport,
    alt: string,
    heading: String,
    info: String
}

const Services: React.FC<ServicesCards> = (props) => {
    const {image, alt, heading, info} = props
  return (
    <div className='max-w-[444px] overflow-hidden rounded-xl flex flex-col gap-10 border-[1px] border-[#F1F0F0] pb-10 bg-white'>
     <Image src={image} alt={alt} placeholder='blur' className='h-[205px]' />
     <div className='px-4 flex flex-col gap-4'>
        <h3 className='font-Inter font-semibolf text-xl'>
           {heading}
        </h3>
        <p className='font-Inter text-lg mb-6'>
           {info} 
        </p>
        <button className='border-b-2 text-[#0546D2] cursor-pointer pb-1 font-Inter font-semibold max-w-fit'>
            Learn More
        </button>
     </div>
    </div>
  )
}

export default Services