'use client'
import Arrow from "../../public/icons/Arrow"

const Subscribe: React.FC = () => {
  return (
       <form action="" className="flex gap-1 mb-4">
           <input type="text" name="" id="" className="h-[46px] w-[325px] shadow-sm border-[1px] border-[#C3C3C3] text-lg px-5 rounded-[5px]"/>
           <button className="bg-[#1959AC] hover:bg-blue-400 transition-colors w-[127px] h-[47px] text-white font-bold font-Inter text-[15px] flex justify-center items-center gap-3 rounded-[5px] cursor-pointer">Submit <Arrow /></button>
          </form>
  )
}

export default Subscribe