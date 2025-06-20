import Image from 'next/image'
import Arrow from '../../public/icons/Arrow'
import Phone from '../../public/icons/Phone'
import ride1 from '../../public/images/ride-1.jpg'
import ride2 from '../../public/images/ride-2.jpg'
import ride3 from '../../public/images/ride-3.jpg'
import bike from '../../public/images/Bike.jpg'
import RideSectionCard from './RideSectionCard'

  const rideDetails = [
    {
      id: 1,
      image: ride1,
      info: 'Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.'
    },
    {
      id: 2,
      image: ride2,
      info: 'Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.'
    },
    {
      id:3,
      image: ride3,
      info: 'Lorem ipsum dolor sit amet consectetur. Vestibulum nisl morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.'
    }
  ]
const Rides = () => {
  return (
     <section className="ml-20 shadow-lg bg-[#FFFFFF99] border-[1px] border-[#D4D4D4] p-10 flex justify-between mb-[100px] relative">
       <div className="w-1/2">
        <h3 className="text-[#1959AC] text-2xl font-Inter font-semibold mb-8">
          Lorem ipsum dolor sit
        </h3>
        <h1 className="xl:text-[42px] lg:text-4xl md:text-3xl text-2xl xl:leading-11 font-Roboto font-bold mb-8 pr-48">
         LOREM IPSUM DOLOR SIT AMET
        </h1>
        <p className="font-Inter md:text-lg xl:pr-20 lg:pr-14 md:pr-10 px-5">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
        </p>
        <div className="flex flex-col gap-5 mt-8">
         {
          rideDetails.map(({id, image, info})=>(
            <RideSectionCard key={id} image={image} info={info} alt={`Ride image ${id}`} />
          ))
         }
        </div>
        <div className="flex gap-4 items-center mt-20">
         <button className="bg-[#1959AC] hover:bg-blue-400 transition-colors w-[179px] h-[38px] text-white font-bold font-Inter text-[15px] flex justify-center items-center gap-3 rounded-[5px] cursor-pointer">
          Loerum Ipsum <Arrow />
         </button>
         <div className="cursor-pointer font-Inter font-semibold flex items-center gap-2 text-[15px] text-[#1959AC]">
          <Phone />
          123456789
         </div>
        </div>
       </div>
       <div className="max-w-[629px]">
        <Image src={bike} alt="bike image" />
       </div>
       <div className="h-5 w-[95%] linear-bg absolute -bottom-1 left-0"></div>
      </section>
  )
}

export default Rides