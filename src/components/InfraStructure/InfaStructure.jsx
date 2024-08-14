import img9 from '../../assets/img9.svg'
const InfraStructure = () => {
  return (
    <div className='flex max-md:flex-col ' style={{

        maxWidth: 1250, margin: "0 auto", padding: "0 20px"
        }}>
            <h1 className='md:hidden mb-8 text-3xl max-sm:w-48 font-medium'>Инфраструктура района</h1>
<div className='h-[400px] max-md:mb-2 max-md:h-[350px]'>
<img src={img9} className='h-full w-full object-cover' alt="" />
</div>
<div className='md:px-11 '>
<h1 className='max-md:hidden mb-8 text-4xl  font-medium'>Инфраструктура района</h1>
<ul className='flex items-center max-x:gap-11 text-[#858585] max-md:h-16 border-b border-b-[#ebebeb] mb-4 md:w-96 pb-4 gap-16'>
    <li className='hover:text-[#E1AF93]  '>Магазины</li>
    <li className='hover:text-[#E1AF93]'>Транспорт</li>
    <li className='hover:text-[#E1AF93]'>Школы</li>
</ul>
<p className='w-[540px] max-md:w-[565px] mb-8 max-x:w-[280px] max-sm:w-[360px]'>
Наш район предлагает широкий выбор магазинов, чтобы удовлетворить любые потребности. В пешей доступности расположены крупные супермаркеты и продуктовые магазины, где вы всегда найдете свежие продукты и товары повседневного спроса
</p>
<div className='flex justify-between max-sm:w-[280px] mb-9 w-[330px] '>
<div>
    <h1 className='font-medium text-lg'>Korzinka</h1>
    <p className='text-[#B3B3B3] text-sm'>5 минут</p>
</div>
<div>
    <h1 className='font-medium text-xl'>Havas</h1>
    <p className='text-[#B3B3B3] text-sm'>10 минут</p>
</div>
</div>
<div className='flex justify-between max-sm:w-[290px]  w-[340px] '>
<div>
    <h1 className='font-medium text-lg'>Fix Price</h1>
    <p className='text-[#B3B3B3] text-sm'>Рядом</p>
</div>
<div className='mb-48'>
    <h1 className='font-medium text-xl'>REDTAG</h1>
    <p className='text-[#B3B3B3] text-sm'>25 минут</p>
</div>
</div>
</div>

    </div>
  )
}

export default InfraStructure