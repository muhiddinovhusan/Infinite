import './Mortgage.css'
const Mortgage = () => {

   const input =[
        {
            placeholder:'Введите стоимость',
            label :"Стоимость недвижимости (у.е.)"
        },
        {
            placeholder:'Введите размер взноса',
            label :"Первоначальный взнос (у.е.)"
        },
        {
            placeholder:'Введите срок',
            label :"Срок в годах"
        },
        {
            placeholder:'Введите размер ставки',
            label :"Ставка (%)"
        }
    ];

    const data = [
        {
            text:'Ежемесячный платеж',
            priceordate:'4 410 у.е.'
        },
        {
            text:'Сумма кредита',
            priceordate:'200 000 у.е.'
        },
        {
            text:'Процентная ставка',
            priceordate:'24%'
        },
        {
            text:'Дата последнего платежа',
            priceordate:'28 июля 2034 г'
        },
    ]

  return (
    <div style={{

        maxWidth: 1250, margin: "0 auto", padding: "0 20px"
        }}
        >
            <h1 className='text-4xl font-medium mb-8'>Рассчитайте ипотеку</h1>
            <div className='flex shadoww  pt-6 px-6 md:px-10 max-sm:flex-col md:pt-10 w-full h-auto mb-48'>
<div className='md:w-3/5 w-2/3 sm:border-r sm:border-r-red-50    md:pr-10  gap-2 '>
<div className='flex md:mb-9 max-md:flex-col'>

{
    input.slice(0, 2).map((item, index) => (   
             <div key={index} className='w-1/2 max-sm:mb-3'>
            <h3 className='w-80 mb-0.5'>{item.label}</h3>
            <input
                className='block h-12 w-[296px]  text-gray-700 border border-gray-300'
                type='text'
                placeholder={item.placeholder}
            />
        </div>
    ))
}
</div>
<div className=' max-md:flex-col flex mb-8'>

{
    input.slice(2, 4).map((item, index) => (   
             <div key={index} className='w-1/2 max-sm:mb-3'>
            <h3 className='w-80 mb-0.5'>{item.label}</h3>
            <input
                className='block h-12 w-[296px]  text-gray-700 border border-gray-300'
                type='text'
                placeholder={item.placeholder}
            />
        </div>
    ))
}

</div>
<div className=' flex  items-center   '>
<button className='bg-[#E1AF93] hover:border-black hover:border text-[#ffffff] max-sm:mb-10 w-48 max-sm:w-1/2 font-semibold text-sm h-11'> Рассчитать</button>
</div>
</div>
<div className='md:w-2/5 w-1/3 sm:pl-10 max-sm:w-full '>
<div className='flex max-md:flex-col  md:mb-9'>

{
    data.slice(0, 2).map((item, index) => (   
        <div key={index} className='mb-4'>
        <h3 className='text-sm text-[#B3B3B3]'>{item.text}</h3>
     <h3 className='font-medium text-lg'>{item.priceordate}</h3>
    </div>
    ))
}
</div>
<div className='flex  max-md:flex-col mb-8'>

{
    data.slice(2, 4).map((item, index) => (   
        <div key={index} className='mb-4'>
        <h3 className='text-sm text-[#B3B3B3]'>{item.text}</h3>
     <h3 className='font-medium text-lg'>{item.priceordate}</h3>
    </div>
    ))
}

</div>
</div>
<div>

</div>
            </div>


    </div>
  )
}

export default Mortgage