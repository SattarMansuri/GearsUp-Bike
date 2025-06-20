'use client';
import React, { useEffect, useRef } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import clsx from 'clsx';
import Thunder from '../../public/icons/Thunder';
import ThreeStars from '../../public/icons/ThreeStars';
import Tower from '../../public/icons/Tower';
import Timer from '../../public/icons/Timer';
import jane from '../../public/images/jane.jpg'
import ralph from '../../public/images/Ralph.jpg'
import courtney from '../../public/images/Courtney.jpg'
import cameron from '../../public/images/Cameron.jpg'

type Testimonial = {
  icon: React.FC;
  text: string;
  name: string;
  avatar: StaticImageData;
};

const testimonials: Testimonial[] = [
  {
    icon: Thunder,
    text: 'Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.',
    name: 'Jane Cooper',
    avatar: jane,
  },
  {
    icon: ThreeStars,
    text: 'Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.',
    name: 'Ralph Edwards',
    avatar: ralph,
  },
  {
    icon: Tower,
    text: 'Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.',
    name: 'Courtney Henry',
    avatar: courtney,
  },
  {
    icon: Timer,
    text: 'Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.',
    name: 'Cameron Williamson',
    avatar: cameron,
  },
];

const TestimonialSection: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.params) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy(); // Important: clean previous navigation
      swiperRef.current.navigation.init();    // Re-init navigation
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="bg-blue-600 text-white py-16 px-4 md:px-20">
      <div className="max-w-screen-xl mx-auto relative">
       <div className='flex justify-between'>
       <div>
          <p className="md:text-2xl text-xl font-medium mb-2">Join other Sun harvesters</p>
        <h2 className="xl:text-[42px] lg:text-4xl md:text-3xl text-2xl xl:leading-11 font-Roboto font-bold mb-4">LOREM IPSUM DOLOR SIT AMET</h2>
        <p className="text-sm md:text-base text-blue-100 max-w-2xl mb-8">
        Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.
        </p>
       </div>
          <button className="bg-white text-blue-600 font-semibold px-4 py-2 rounded mb-10 h-[38px] max-w-[238px]">
          Lorem Ipsum
        </button>
       </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1.2}
          loop={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          breakpoints={{
            640: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              {({ isActive, isPrev, isNext }) => (
                <div
                  className={clsx(
                    'bg-white text-black p-6 rounded-lg h-full flex flex-col justify-between transition-all duration-300 ease-in-out',
                    {
                      'scale-100 shadow-xl z-20': isActive,
                      'scale-95 opacity-90 z-10': isPrev || isNext,
                      'scale-90 opacity-70 z-0': !isActive && !isPrev && !isNext,
                    }
                  )}
                >
                  <div className="text-3xl mb-4">
                    <item.icon />
                  </div>
                  <p className="text-sm mb-6">{item.text}</p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
                      <Image
                        src={item.avatar}
                        alt={item.name}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                    <span className="text-sm font-semibold">{item.name}</span>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex gap-4 mt-10">
          <button
            ref={prevRef}
            className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition"
          >
            ←
          </button>
          <button
            ref={nextRef}
            className="w-10 h-10 rounded-full border border-white text-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
