import React from 'react'

const Navbar2 = () => {
  return (
    <div  className='mb-40' style={{

        maxWidth: 1250, margin: "0 auto", padding: "0 20px"
      }}>

        <ul className='flex items-center text-sm  max-md:overflow-x-auto max-md:whitespace-nowrap w-full max-md:gap-14 md:justify-center h-20 border-b mb-40 border-b-[#ededed] gap-24 '>
            <li><a href='#' className='hover:text-[#E1AF93] font-medium'>О комплексе</a></li>
            <li><a href='#' className='hover:text-[#E1AF93] font-medium'>Галерея</a></li>
            <li><a href='#' className='hover:text-[#E1AF93] font-medium'>Планировки</a></li>
            <li><a href='#' className='hover:text-[#E1AF93] font-medium'>Условия покупки</a></li>
            <li><a href='#' className='hover:text-[#E1AF93] font-medium'> Инфраструктура</a></li>
            <li><a href='#' className='hover:text-[#E1AF93] font-medium'>Отзывы </a></li>
        </ul>
      </div>
  )
}

export default Navbar2