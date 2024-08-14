import { LucideSortAsc, SortDescIcon } from 'lucide-react'
import React from 'react'

const News = () => {
  return (
    <div className='h-[1000px]'>
      <h1 className='text-3xl font-medium mb-7'>Статьи</h1>
      <div className='flex mb-6'>

        <div className='flex gap-3'>
          <button className='h-10 w-[70px] bg-[#e1af93] text-white text-sm'>Все</button>
          <button className='h-10 w-[151px]  border text-sm'>О недвижимости</button>
          <button className='h-10 w-32  border text-sm'>Инвесторам</button>
          <button className='h-10 w-52  border text-sm'>Покупка недвижимости</button>
          <button className='h-10 w-40 border text-sm'>Обзоры районов</button>


        </div>
        <div className='flex items-center gap-3 justify-end w-full' >
          <h3>Сортировать</h3> <SortDescIcon />
        </div>
      </div>
    



    </div>
  )
}

export default News