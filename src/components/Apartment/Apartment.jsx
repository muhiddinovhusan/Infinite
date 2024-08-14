import React from 'react'
import img5 from '../../assets/img5.svg'
import img6 from '../../assets/img6.svg'
import img7 from '../../assets/img7.svg'
import img8 from '../../assets/img8.svg'
const Apartment = () => {
  return (
    <div className='' style={{

        maxWidth: 1250, margin: "0 auto", padding: "0 20px"
        }}>
<h1 className='font-medium mb-6 max-x:text-3xl text-4xl'>Планировки и доступные квартиры</h1>
<div className='mb-10 gap-3 max-md:flex-wrap flex'>
<select className='bg-[#EDF3F5] h-11 max-x:w-24 text-sm max-x:h-10 w-28 text-center px-2' name="" id="">
    <option value=""> Этаж</option>
</select>
<select className='bg-[#EDF3F5] h-11 max-x:text-sm max-x:w-24 max-x:h-10  w-28 text-center px-2' name="" id="">
    <option value=""> Цена</option>
</select>
<select className='bg-[#EDF3F5] h-11 max-x:h-10 max-x:text-sm max-x:w-40  w-48 text-center px-2' name="" id="">
    <option value=""> Количество комнат</option>
</select>
{/* <button className='w-32 h-12 bg-[#EDF3F5] flex justify-center items-center'>
  <span style={{ transform: 'rotate(90deg)' }}>&gt;</span>
</button> */}


</div>

<div className='flex gap-4 mb-8 max-md:flex-col'>

<div className='flex gap-4 w-1/2 max-md:w-full  max-sm:flex-col  '>
<div className='w-1/2 max-sm:w-full px-4 h-full  border'>
<div>
<img src={img5} alt="" />
</div>
<div className='h-[172px] border-b border-b-[#EAEAEA] w-full'>
<h2 className='font-medium text-xl'>
3-я квартира в ЖК Infinity
</h2>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Этаж</h2>
<h2 className='text-lg'> 4</h2>
</div>
<div className='flex mb-1  justify-between'>
<h2 className='text-lg'>Дом</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Подъезд</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex   justify-between'>
<h2 className='text-lg'>Комнат</h2>
<h2 className='text-lg'> 3</h2>
</div>



</div>
<div className='h-[76px] flex items-center'>
<h1 className='text-xl font-medium text-[#E1AF93]'>
$600 000
</h1>
</div>
</div>
<div className='w-1/2 max-sm:w-full px-4 h-full  border'>
<div>
<img src={img6} alt="" />
</div>
<div className='h-[172px] border-b border-b-[#EAEAEA] w-full'>
<h2 className='font-medium text-xl'>
3-я квартира в ЖК Infinity
</h2>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Этаж</h2>
<h2 className='text-lg'> 4</h2>
</div>
<div className='flex mb-1  justify-between'>
<h2 className='text-lg'>Дом</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Подъезд</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex   justify-between'>
<h2 className='text-lg'>Комнат</h2>
<h2 className='text-lg'> 3</h2>
</div>



</div>
<div className='h-[76px] flex items-center'>
<h1 className='text-xl font-medium text-[#E1AF93]'>
$600 000
</h1>
</div>
</div>

</div>
<div className='flex gap-4 max-md:w-full max-sm:flex-col w-1/2'>
<div className='w-1/2 max-sm:w-full px-4 h-full  border'>
<div>
<img src={img7} alt="" />
</div>
<div className='h-[172px] border-b border-b-[#EAEAEA] w-full'>
<h2 className='font-medium text-xl'>
3-я квартира в ЖК Infinity
</h2>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Этаж</h2>
<h2 className='text-lg'> 4</h2>
</div>
<div className='flex mb-1  justify-between'>
<h2 className='text-lg'>Дом</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Подъезд</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex   justify-between'>
<h2 className='text-lg'>Комнат</h2>
<h2 className='text-lg'> 3</h2>
</div>



</div>
<div className='h-[76px] flex items-center'>
<h1 className='text-xl font-medium text-[#E1AF93]'>
$600 000
</h1>
</div>
</div>
<div className='w-1/2 max-sm:w-full px-4 h-full  border'>
<div>
<img src={img8} alt="" />
</div>
<div className='h-[172px] border-b border-b-[#EAEAEA] w-full'>
<h2 className='font-medium text-xl'>
3-я квартира в ЖК Infinity
</h2>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Этаж</h2>
<h2 className='text-lg'> 4</h2>
</div>
<div className='flex mb-1  justify-between'>
<h2 className='text-lg'>Дом</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Подъезд</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex   justify-between'>
<h2 className='text-lg'>Комнат</h2>
<h2 className='text-lg'> 3</h2>
</div>



</div>
<div className='h-[76px] flex items-center'>
<h1 className='text-xl font-medium text-[#E1AF93]'>
$600 000
</h1>
</div>
</div>
</div>
</div>
<div className='flex gap-4 mb-20 max-md:flex-col'>

<div className='flex gap-4 w-1/2 max-md:w-full  max-sm:flex-col  '>
<div className='w-1/2 max-sm:w-full px-4 h-full  border'>
<div>
<img src={img5} alt="" />
</div>
<div className='h-[172px] border-b border-b-[#EAEAEA] w-full'>
<h2 className='font-medium text-xl'>
3-я квартира в ЖК Infinity
</h2>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Этаж</h2>
<h2 className='text-lg'> 4</h2>
</div>
<div className='flex mb-1  justify-between'>
<h2 className='text-lg'>Дом</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Подъезд</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex   justify-between'>
<h2 className='text-lg'>Комнат</h2>
<h2 className='text-lg'> 3</h2>
</div>



</div>
<div className='h-[76px] flex items-center'>
<h1 className='text-xl font-medium text-[#E1AF93]'>
$600 000
</h1>
</div>
</div>
<div className='w-1/2 max-sm:w-full px-4 h-full  border'>
<div>
<img src={img6} alt="" />
</div>
<div className='h-[172px] border-b border-b-[#EAEAEA] w-full'>
<h2 className='font-medium text-xl'>
3-я квартира в ЖК Infinity
</h2>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Этаж</h2>
<h2 className='text-lg'> 4</h2>
</div>
<div className='flex mb-1  justify-between'>
<h2 className='text-lg'>Дом</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Подъезд</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex   justify-between'>
<h2 className='text-lg'>Комнат</h2>
<h2 className='text-lg'> 3</h2>
</div>



</div>
<div className='h-[76px] flex items-center'>
<h1 className='text-xl font-medium text-[#E1AF93]'>
$600 000
</h1>
</div>
</div>

</div>
<div className='flex gap-4 max-md:w-full max-sm:flex-col w-1/2'>
<div className='w-1/2 max-sm:w-full px-4 h-full  border'>
<div>
<img src={img7} alt="" />
</div>
<div className='h-[172px] border-b border-b-[#EAEAEA] w-full'>
<h2 className='font-medium text-xl'>
3-я квартира в ЖК Infinity
</h2>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Этаж</h2>
<h2 className='text-lg'> 4</h2>
</div>
<div className='flex mb-1  justify-between'>
<h2 className='text-lg'>Дом</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Подъезд</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex   justify-between'>
<h2 className='text-lg'>Комнат</h2>
<h2 className='text-lg'> 3</h2>
</div>



</div>
<div className='h-[76px] flex items-center'>
<h1 className='text-xl font-medium text-[#E1AF93]'>
$600 000
</h1>
</div>
</div>
<div className='w-1/2 max-sm:w-full px-4 h-full  border'>
<div>
<img src={img8} alt="" />
</div>
<div className='h-[172px] border-b border-b-[#EAEAEA] w-full'>
<h2 className='font-medium text-xl'>
3-я квартира в ЖК Infinity
</h2>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Этаж</h2>
<h2 className='text-lg'> 4</h2>
</div>
<div className='flex mb-1  justify-between'>
<h2 className='text-lg'>Дом</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex mb-1 justify-between'>
<h2 className='text-lg'>Подъезд</h2>
<h2 className='text-lg'> 8</h2>
</div>
<div className='flex   justify-between'>
<h2 className='text-lg'>Комнат</h2>
<h2 className='text-lg'> 3</h2>
</div>



</div>
<div className='h-[76px] flex items-center'>
<h1 className='text-xl font-medium text-[#E1AF93]'>
$600 000
</h1>
</div>
</div>
</div>
</div>

<div className=' flex items-center mb-36 justify-center '>
<button className='bg-[#E1AF93] max-x:w-[150px] max-x:h-[38px] max-x:text-xs hover:border-black hover:border text-[#ffffff] w-52 max-sm:w-1/2 font-semibold text-sm h-11'>Загрузить все</button>
</div>

    </div>
  )
}

export default Apartment