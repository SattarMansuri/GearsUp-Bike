'use client'
import React, { useEffect, useRef, useState } from 'react'

const Accordian = () => {
    const [isOpen, setIsOpen] = useState(false)
    const accordianRef = useRef<HTMLDivElement | null>(null)
      const handleOutsideClick = (e:MouseEvent) => {
    if (
      isOpen &&
    accordianRef.current &&
    e.target instanceof Node &&
    !accordianRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };
     useEffect(() => {
        if (isOpen) {
          document.addEventListener('mousedown', handleOutsideClick);
        } else {
          document.removeEventListener('mousedown', handleOutsideClick);
        }
    
        return () => {
          document.removeEventListener('mousedown', handleOutsideClick);
        };
      }, [isOpen]);
  return (
    <div ref={accordianRef} onClick={()=>setIsOpen(!isOpen)} className='md:p-5 p-4 border-b-[1px] border-[#11111133] flex justify-between items-center cursor-pointer transition-all delay-300 ease-out'>
     <div className='flex flex-col gap-4'>
        <h3 className='md:text-lg font-Inter font-semibold'>
            Lorem ipsum dolor sit amet consectetur?
        </h3>
       {
        isOpen && <p className='md:text-lg font-Inter md:w-[700px] md:pr-0 pr-4'>
        Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
       </p>
       }
     </div>
     <h4 className='md:text-2xl text-xl font-inter font-medium'>
      {
        isOpen ? '-' : '+'
      }
     </h4>
    </div>
  )
}

export default Accordian