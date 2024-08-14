import { ArrowRightIcon, MoveRight } from 'lucide-react'
import './Header.css'

import vector from '../../assets/Vector.svg'
import vector2 from '../../assets/Vector2.svg'
const Header = () => {
  return (
    <div className='bg w-full   h-[700px] pt-[450px] ' >
<div className='text-[#FFFFFF] ' style={{

maxWidth: 1250, margin: "0 auto", padding: "0 20px"
}}>
    <div className='flex  gap-2 sm:hidden'>
<button className='w-12 h-12 max-x:w-10 max-x:h-10  flex justify-center items-center rounded-full border'>
<img src={vector} className='h-3' alt="" />
</button>
<button className='w-12 max-x:w-10 max-x:h-10 h-12 flex justify-center items-center text-xl rounded-full border'>
<img src={vector2} className='h-3' alt="" />
</button>
</div>
<h1 className='text-6xl mt-4 mb-3 max-md:text-5xl max-sm:text-4xl font-medium'>Infinity</h1>
<p className='mb-8'>от $500 000</p>
<div className='flex items-center justify-between'>

<div className='flex gap-4 w-full'>
    <button className='bg-[#E1AF93] hover:border-black max-x:w-[150px] max-x:text-xs max-x:h-[38px] hover:border w-48 max-sm:w-1/2 font-semibold text-sm h-11'>Оставить заявку</button>
    <button className='h-11 w-48 border max-sm:w-1/2 max-x:w-[150px] max-x:h-[38px] max-x:text-xs  font-medium text-sm'>Позвонить</button>
</div>
<div className='flex gap-2 max-sm:hidden'>
<button className='w-14 h-14  flex justify-center items-center rounded-full border'>
<img src={vector} className='h-4' alt="" />
</button>
<button className='w-14 h-14 flex justify-center items-center text-xl rounded-full border'>
<img src={vector2} className='h-4' alt="" />
</button>
</div>
</div>
</div>

    </div>
  )
}

export default Header