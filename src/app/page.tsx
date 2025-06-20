import Header from "@/components/Header";
import Image from "next/image";
import Arrow from '../../public/icons/Arrow'
import Frame from '../../public/icons/Frame'
import heroImage from '../../public/images/hero-image.jpg'
import bike from '../../public/images/Bike.jpg'
import ride1 from '../../public/images/ride-1.jpg'
import ride2 from '../../public/images/ride-2.jpg'
import ride3 from '../../public/images/ride-3.jpg'
import RideSectionCard from "@/components/RideSectionCard";
import Phone from '../../public/icons/Phone'
import customer from '../../public/images/customer.jpg'
import bullet from '../../public/images/Bullet.svg'
import bannar1 from '../../public/images/Banner1-Image.jpg'
import logo from '../../public/images/logo.png'
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
import bgLines from '../../public/images/bg-lines.jpg'
import service1 from '../../public/images/service-1.jpg'
import service2 from '../../public/images/service-2.jpg'
import service3 from '../../public/images/service-3.jpg'
import service4 from '../../public/images/service-4.jpg'
import Services from "@/components/Services";
import banner2 from '../../public/images/banner-2.jpg'
import background from '../../public/images/Background.jpg'
import google from '../../public/images/googlePlay.jpg'
import appStor from '../../public/images/appStore.jpg'
import trust from '../../public/images/trust.jpg'
import sales from '../../public/images/Sales.jpg'
import Pin from '../../public/images/pin.svg'
import story from '../../public/images/story.jpg'
import Accordian from "@/components/Accordian";
import Footer from "@/components/Footer";
import RequestForm from "@/components/RequestForm";
import tour from '../../public/images/tour.jpg'
import TestimonialSection from "@/components/Testimonials";
import Subscribe from "@/components/Subscribe";

export default function Home() {
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
  return (
    <>
    <Header />
    <main className="">
      <section className="flex items-center pl-20 w-full xl:mb-[100px] lg:mb-20 md:mb-14 mb-10">
        <div className="w-1/2 pr-20">
          <h1 className="font-bold xl:text-[64px] xl:leading-[70px] lg:text-5xl md:text-4xl text-3xl font-Roboto mb-8">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="font-Inter md:text-lg mb-20">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse. 
          </p>
         <Subscribe />
          <div className="flex gap-2 items-center">
           <Frame /> <p className="font-Inter text-[15px]">No credit card required!</p>
          </div>
        </div>
        <div className="w-1/2 overflow-hidden cross-sec relative ">
          <Image src={heroImage} alt="hero image" className=" h-full w-full object-cover" />
           <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white to-transparent z-10"></div>
        </div>
      </section>
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
      <section className="pl-20 xl:mb-[100px] lg:mb-20 md:mb-14 mb-10 flex justify-between relative">
        <div className="mb-8">
          <h3 className="text-[#1959AC] text-2xl font-Inter font-semibold mb-8">
            Lorem ipsum dolor sit amet
          </h3>
          <h1 className="xl:text-[42px] lg:text-4xl md:text-3xl text-2xl xl:leading-11 font-Roboto font-bold mb-8 pr-48">
         LOREM IPSUM DOLOR SIT AMET CONSECTETUR. EU ELIT.
        </h1>
        <p className="font-Inter text-lg xl:pr-32 lg:pr-24 md:pr-16 px-5">
          Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec pharetra erat lacus suspendisse ornare. 
        </p>
        <div className="flex flex-col mt-10 gap-7">
         {
          [...Array(3)].map((_, i)=>(
            <div key={i} className="flex items-start gap-3">
          <Image src={bullet} alt='Bullet point logo' />
          <div className="flex flex-col gap-1">
            <h5 className="md:text-xl text-lg font-Inter font-semibold">
              Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
            </h5>
            <p className="font-Inter md:text-lg xl:pr-32 lg:pr-24 md:pr-16 px-5">
              Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non viverra. Risus quam mattis senectus vitae interdum odio ornare gravida vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
            </p>
          </div>
         </div>
          ))
         }
        </div>
        </div>
        <div className="max-w-[578px] w-full mt-20">
        <Image src={customer} alt='Customer Image' className="w-full object-cover"  placeholder="blur" />
        </div>
        <div className="h-5 max-w-[92%] min-w-[92%] linear-bg absolute -bottom-1 right-0"></div>
      </section>
      <section className="w-full bg-center bg-cover p-16 xl:mb-[100px] lg:mb-20 md:mb-14 mb-10" style={{
        backgroundImage: `url(${bannar1.src})`,
      }}>
         <div className='max-h-[60px] w-[156px] overflow-hidden mb-5'>
        <Image src={logo} alt='logo Image' className='h-full w-full object-cover' placeholder='blur' />
      </div>
      <div className="flex flex-col justify-center gap-2">
          <h1 className="xl:text-[42px] lg:text-4xl md:text-3xl text-2xl xl:leading-11 font-Roboto font-bold mb-8 text-white pl-32">
         LOREM IPSUM DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI.
        </h1>
        <p className="font-Inter md:text-lg font-semibold text-white xl:px-72 lg:px-60 md:px-32 px-5 text-center mb-5">
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
        </p>
         <p className="font-Inter md:text-lg font-semibold text-white xl:px-[290px] lg:px-36 md:px-28 px-5 text-center">
        Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
        </p>
       <div className="flex justify-center mt-8">
         <button className="h-[38px] w-[179px] rounded-[5px] bg-white shadow-xs flex justify-center items-center text-[#1959AC] gap-2 cursor-pointer hover:bg-gray-200 transition-colors">
          Lorem Ipsum <Arrow fill="#1959AC"/>
        </button>
       </div>
      </div>
      </section>
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
       <section className="w-full bg-center bg-cover p-16 xl:mb-[100px] lg:mb-20 md:mb-14 mb-10 pb-52" style={{
        backgroundImage: `url(${banner2.src})`,
      }}>
         <div className='max-h-[60px] w-[156px] overflow-hidden mb-20'>
        <Image src={logo} alt='logo Image' className='h-full w-full object-cover' placeholder='blur' />
      </div>
          <h1 className="xl:text-[42px] lg:text-4xl md:text-3xl text-2xl xl:leading-11 font-Roboto font-bold mb-8 text-white px-32 text-center">
         DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING PURUS EGESTAS ALIQUAM VIVERRA MI. DOLOR SIT AMET CONSECTETUR. QUIS ADIPISCING
        </h1>
      </section>
      <section className="xl:mb-[100px] lg:mb-20 md:mb-14 mb-10">
        <h1 className="xl:text-[42px] lg:text-4xl md:text-3xl text-2xl xl:leading-11 font-Roboto font-bold mb-8 text-white px-32 text-center">
         REQUEST A QUOTE
        </h1>
        <RequestForm />
      </section>
      <section className="bg-[#F3F3F3] xl:mb-[100px] lg:mb-20 md:mb-14 mb-10 flex items-center justify-between">
        <div className="pl-20 pb-20 pt-16">
 <h3 className="text-[#1959AC] text-2xl font-Inter font-semibold mb-8">
            Lorem ipsum
          </h3>
          <h1 className="xl:text-[42px] lg:text-4xl md:text-3xl text-2xl xl:leading-11 font-Roboto font-bold mb-8 w-96">
         LOREM IPSUM DOLOR SIT AMET
        </h1>
        <p className="font-Inter md:text-lg md:w-[500px] mb-20">
          Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
        </p>
        <div className="flex gap-5">
         <Image src={google} alt="Google play store image" className="object-cover" placeholder="blur"/>
         <Image src={appStor} alt="Google play store image" className="object-cover" placeholder="blur"/>
        </div>
        </div>
        <div className="h-full">
          <Image src={background} alt="App Image" className="object-cover mix-blend-multiply h-[530px]" />
        </div>
      </section>
      <section className="bg-[#F3F3F3] xl:mb-[100px] lg:mb-20 md:mb-14 mb-10 xl:py-16 md:py-10 py-7 flex items-center justify-end relative xl:pr-20 lg:pr-16 md:pr-10 px-5">
      <Image src={tour} alt="tour image" className="object-cover max-w-[550px] absolute left-0 -top-14" />
      <div>
        <h3 className="md:text-2xl text-xl font-Inter font-bold mb-5 text-[#1959AC]">
          Lorem ipsum
        </h3>
         <h1 className="xl:text-[42px] lg:text-4xl md:text-3xl text-2xl xl:leading-11 font-Roboto font-bold mb-8 w-96">
         <span className="text-[#1959AC]">LOREM</span> IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC
        </h1>
           <p className="font-Inter md:text-lg md:w-[500px] lg:mb-16 md:mb-10 mb-7">
        Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non. 
        </p>
        <div className="grid sm:grid-cols-2 gap-y-5 mb-8">
     {
      [...Array(6)].map((_,i)=>(
           <h4 key={i} className="text-xl  font-bold  font-Inter">Lorem Ipsum</h4>
      ))
     }
        </div>
          <button className="w-[179px] h-[38px] text-white bg-[#1959AC] rounded-[5px] flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-400 transition-colors">
          Loerum Ipsum <Arrow />
        </button>
      </div>
       <div className="h-5 w-[95%] linear-bg absolute bottom-0 left-0 z-0"></div>
      </section>
      <TestimonialSection />
      <section className="xl:mb-[100px] lg:mb-20 md:mb-14 mb-10 px-20 py-28 flex items-center">
      <div>
        <h1 className="font-Roboto xl:text-[42px] lg:text-4xl md:text-3xl text-2xl xl:leading-11 font-bold mb-8 letter-2">
          LOREM IPSUM DOLOR SIT AMET
        </h1>
        <div className="max-w-[600px] flex rounded-[8px] border-[1px] border-[#CBD5E1] overflow-hidden h-12 mb-8">
        <div className="h-full border-r-[1px] border-[#CBD5E1] text-xl font-semibold font-Inter w-1/3 flex justify-center items-center cursor-pointer">
        Research
        </div> 
         <div className="h-full border-r-[1px] border-[#CBD5E1] text-xl font-semibold font-Inter w-1/3 flex justify-center items-center cursor-pointer">
        Plan
        </div> 
         <div className="h-full text-xl font-semibold font-Inter w-1/3 flex justify-center items-center cursor-pointer">
        Design
        </div> 
        </div>
        <p className="text-gray-600 font-Inter md:text-lg pr-24 mb-8">
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
        </p>
        <button className="text-[#1959AC] flex gap-2 items-center font-Roboto font-medium">
          Check Tools <Arrow fill="#1959AC" />
        </button>
      </div>
      <div>
        <Image src={trust} alt="Customer trust Image" className="object-cover max-w-[600px]" />
      </div>
      </section>
      <section className="mb-[200px] bg-[#F1F1F1] relative pl-20 pt-12 p-96">
      <div className="w-[600px]">
         <h1 className="font-Roboto xl:text-[42px] lg:text-4xl md:text-3xl text-2xl xl:leading-11 font-bold mb-8 letter-2 text-[#1959AC]">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DIGNISSIM TELLUS.
        </h1>
          <p className="font-Inter md:text-lg pr-2 mb-8">
          Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt ultricies feugiat mauris. Aliquam platea turpis porta nisl felis. Massa in facilisis semper libero eget eu quisque bibendum platea. Tortor fames.
        </p>
        <button className="w-[179px] h-[38px] text-white bg-[#1959AC] rounded-[5px] flex justify-center items-center gap-2 cursor-pointer hover:bg-blue-400 transition-colors">
          Loerum Ipsum <Arrow />
        </button>
      </div>
      <div className="max-w-[570px] w-full absolute right-4 -top-14">
       <Image src={sales} alt="Sales Image" placeholder="blur" className="object-cover w-full" />
      </div>
      <div className="max-w-[546px] bg-white p-10 absolute left-16 -bottom-20 flex flex-col gap-5 shadow-lg z-10">
        <Image src={Pin} alt="Pin image" className="absolute top-2 right-5" />
        <h3 className="font-Inter font-semibold text-xl mb-2">
          Lorem ipsum dolor sit
        </h3>
        <p className="font-Inter md:text-lg">
          Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse semper.
        </p>
        <p className="font-Inter md:text-lg">
        Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.
        </p>
        <p className="font-Inter md:text-lg">
          Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque scelerisque facilisi. Ultrices lectus viverra pharetra commodo.
        </p>
      </div>
       <div className="h-5 w-[95%] linear-bg absolute bottom-0 left-0 z-0"></div>
      </section>
      <section className="xl:mb-[100px] lg:mb-20 md:mb-14 mb-10 py-20 px-20 relative">
       <h1 className="font-Roboto xl:text-[42px] lg:text-4xl md:text-3xl text-2xl xl:leading-11 font-bold mb-8 letter-2 text-center">
          LOREM IPSUM DOLOR SIT AMET
        </h1>
          <p className="font-Inter md:text-lg mb-20 text-center md:px-10">
    Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst. Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut aliquam at ac est nisi, interdum etiam dignissim. Sed ut vestibulum eget purus ornare. Risus elit et fringilla habitant ut facilisi.
        </p>
        <div className="flex items-center">
          <Image src={story} alt="story Image 1" placeholder="blur" className="object-cover max-w-[680px]"/>
        <div className="max-w-[680px] bg-white p-10 absolute shadow-lg right-24 border-[1px] border-[#E2E8F0]">
         <h3 className="text-2xl font-inter font-semibold text-[#1959AC] mb-7">
          Artist & Investor
         </h3>
         <p className="md:text-lg font-Inter mb-5 lg:pr-20 md:pr-12 px-5">
          Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...
         </p>
         <button className="flex justify-center items-center gap-4 text-[#1959AC] cursor-pointer">
           Read Full Story <Arrow fill="#1959AC" />
         </button>
        </div>
        </div>
      </section>
      <section className="xl:mb-[100px] lg:mb-20 md:mb-14 mb-10 lg:px-20 md:px-12 px-5 bg-[#FBFBFB] pt-10 pb-20">
        <h1 className="xl:text-[42px] lg:text-4xl md:text-3xl text-2xl xl:leading-11 font-Roboto font-bold pb-16 border-b-[1px] border-[#11111133]">
       FREQUENTLY ASKED QUESTIONS (FAQS)
        </h1>
        {
          [...Array(5)].map((_,i)=>(
         <Accordian key={i} />
          ))
        }
      </section>
      <section className="xl:mb-[100px] lg:mb-20 md:mb-14 mb-10 flex flex-col md:px-0 px-5 gap-8 py-10 justify-center w-full items-center">
           <Image src={logo} alt='logo Image' className='h-full max-w-[156px] object-cover' placeholder='blur' />
 <h1 className="font-Roboto xl:text-[42px] lg:text-4xl md:text-3xl text-2xl xl:leading-11 font-bold md:w-[700px] letter-2 text-center">
          LOREM IPSUM DOLOR SIT AMET CONSECTETUR. DUI.
        </h1>
          <p className="font-Inter md:text-lg md:text-center px-10 md:w-[520px]">
    Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
        </p>
          <button className="bg-[#1959AC] hover:bg-blue-400 transition-colors w-[179px] h-[38px] text-white font-bold font-Inter text-[15px] flex justify-center items-center gap-3 rounded-[5px] cursor-pointer">
          Loerum Ipsum <Arrow />
         </button>
      </section>
    </main>
    <Footer />
    </>
  );
}



