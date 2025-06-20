import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface RideCardProps{
image: StaticImport,
info: String,
alt: string
}

const RideSectionCard: React.FC<RideCardProps> = (props) => {
    const {image, info, alt} = props
  return (
    <div className='h-[141px] flex items-center gap-5'>
     <Image src={image} alt={alt} className='h-full w-[141px] object-cover' placeholder='blur'/>
     <p className='font-Inter text-lg pr-32'>
     {info}
     </p>
    </div>
  )
}

export default RideSectionCard