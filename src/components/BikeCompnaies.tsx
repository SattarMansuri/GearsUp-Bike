  import hero from '../../public/images/Hero.svg'
  import honda from '../../public/images/Honda.svg'
  import bajaj from '../../public/images/Bajaj.svg'
  import tvs from '../../public/images/TVS.svg'
  import royalEnfield from '../../public/images/royalEnfield.svg'
  import yamaha from '../../public/images/Yamaha.svg'
  import ktm from '../../public/images/KTM.svg'
  import ather from '../../public/images/Ather.svg'
  import ola from '../../public/images/OlaElectric.svg'
  import revolt from '../../public/images/Revolt.svg'
  import ultravoilette from '../../public/images/Ultraviolette.svg'
  import tork from '../../public/images/tork.svg'
import Image from 'next/image'

  const bikeCompanies = [
    {id: 1, image: hero, alt: 'Hero logo'},
    {id: 2, image: honda, alt: 'Honda logo'},
    {id: 3, image: bajaj, alt:'Bajaj logo'},
    {id: 4, image: tvs, alt:'TVS logo'},
    {id: 5, image: royalEnfield, alt: 'Royal Enfield Logo'},
    {id: 6, image: yamaha, alt: 'Yamaha logo'},
    {id: 7, image: ktm, alt: 'KTM logo'},
    {id: 8, image: ather, alt: 'Ather Logo'},
    {id: 9, image: ola, alt: 'Ola Electric logo'},
    {id: 10, image: revolt, alt: 'Revolt logo'},
    {id: 11, image: ultravoilette, alt: 'Ultravoilette logo'},
    {id: 12, image: tork, alt: 'Tork logo'},
  ]
const BikeCompnaies = () => {
  return (
     <section className="xl:mb-[100px] lg:mb-20 md:mb-14 mb-10">
       <h1 className="xl:text-[42px] lg:text-4xl md:text-3xl text-2xl xl:leading-11 font-Roboto font-bold mb-20 text-center px-60">
         LOREM IPSUM DOLOR SIT AMET CONSECTETUR. COMMODO LEO AMET.
        </h1>
        <div className="max-w-[1112px] mx-auto grid grid-cols-4 gap-16 justify-between">
         {
          bikeCompanies.map(({id, image, alt})=>(
            <Image key={id} src={image} alt={alt} className="object-cover" />
          ))
         }
        </div>
      </section>
  )
}

export default BikeCompnaies