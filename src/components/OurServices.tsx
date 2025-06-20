  import service1 from '../../public/images/service-1.jpg'
  import service2 from '../../public/images/service-2.jpg'
  import service3 from '../../public/images/service-3.jpg'
  import service4 from '../../public/images/service-4.jpg'
  import bgLines from '../../public/images/bg-lines.jpg'
import Services from './Services'

  const services =[
    {
      id: 1,
      image: service1,
      heading: 'Lorem ipsum dolor sit amet consectetur.' ,
      info: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.'
    },
     {
      id: 2,
      image: service2,
      heading: 'Lorem ipsum dolor sit amet consectetur.' ,
      info: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.'
    },
     {
      id: 3,
      image: service3,
      heading: 'Lorem ipsum dolor sit amet consectetur.' ,
      info: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.'
    },
     {
      id: 4,
      image: service4,
      heading: 'Lorem ipsum dolor sit amet consectetur.' ,
      info: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.'
    },
  ]

const OurServices = () => {
  return (
       <section className="xl:mb-[100px] lg:mb-20 md:mb-14 mb-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgLines.src})`
      }}
      >
      <div className="pl-20 mb-20">
         <h3 className="text-[#1959AC] text-2xl font-Inter font-semibold mb-8">
            Lorem ipsum dolor sit amet
          </h3>
          <h1 className="txl:text-[42px] lg:text-4xl md:text-3xl text-2xl xl:leading-11 font-Roboto font-bold mb-8">
         LOREM IPSUM DOLOR SIT 
        </h1>
        <p className="font-Inter md:text-lg md:w-[670px]">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus. 
        </p>
      </div>
      <div className="flex flex-wrap gap-16 justify-center">
       {
        services.map(({id, image, heading, info})=>(
          <Services key={id} image={image} heading={heading} info={info} alt={`Services Image ${id}`} />
        ))
       }
      </div>
      </section>
  )
}

export default OurServices