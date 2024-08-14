import React from 'react'
import vector from '../../assets/Vector.svg'
import vector2 from '../../assets/Vector2.svg'
import img2 from '../../assets/img2.svg'

const Club = () => {
  return (
    <div className='mb-20' style={{

        maxWidth: 1250, margin: "0 auto 150px", padding: "0 20px"
        }}>
<div className='flex justify-between mb-3'  >
    <div className='mt-11'>
        <h1 className='text-5xl max-x:text-3xl max-md:text-4xl  max-x:mb-5 mb-11 font-medium'>Infinity <br /> Клубный дом</h1>
        <button className='bg-[#E1AF93] max-x:w-[150px] max-x:h-[38px] max-x:text-xs  hover:border-black hover:border w-48 max-sm:w-1/2 font-semibold text-[#ffffff] text-sm h-11'>Позвонить </button>

    </div>
    <div>

<p className='w-[520px] mb-11 font-normal text-base max-md:hidden'> Дом имеет свой приватный, закрытый двор, с несколькими зонами отдыха для взрослых и детей. Отдельно предусмотрено помещение для консьержа и охраны. Из окон квартир открывается вид на эксклюзивный ландшафтный двор-парк общей площадью более 1 Га, с прогулочными аллеями, водными объектами и летним кинотеатром.</p>
<div className='flex  gap-2  max-md:hidden'>
<button className='w-12 h-12 max-x:w-10 max-x:h-10 flex justify-center items-center rounded-full border-black border'>
<img src={vector} className='h-3 filter invert' alt="" />
</button>
<button className='w-12 h-12 max-x:w-10 max-x:h-10 flex justify-center items-center text-xl rounded-full border-black border'>
<img src={vector2} className='h-3 filter invert' alt="" />
</button>
</div>
    </div>
</div>

<div className=' max-sm:h-[320px] mb-8 h-[400px] md:h-[550px] '>
<img src={img2} className='object-cover h-full w-full' alt="" />
</div>
<p className='w-[472px] max-sm:w-[354px] max-x:w-[280px]  max-sm:text-[15px] mb-6 font-normal text-base md:hidden'> Дом имеет свой приватный, закрытый двор, с несколькими зонами отдыха для взрослых и детей. Отдельно предусмотрено помещение для консьержа и охраны. Из окон квартир открывается вид на эксклюзивный ландшафтный двор-парк общей площадью более 1 Га, с прогулочными аллеями, водными объектами и летним кинотеатром.</p>
<div className='flex  gap-2  md:hidden'>
<button className='w-11 h-11 max-x:w-10 max-x:h-10   flex justify-center items-center rounded-full border-black border'>
<img src={vector} className='h-3 filter invert' alt="" />
</button>
<button className='w-11 h-11 max-x:w-10 max-x:h-10  flex justify-center items-center text-xl rounded-full border-black border'>
<img src={vector2} className='h-3 filter invert' alt="" />
</button>
</div>

    </div>
  )
}

export default Club