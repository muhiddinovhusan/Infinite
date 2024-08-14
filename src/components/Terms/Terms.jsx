import React from 'react'

const Terms = () => {
  return (
    <div className='' style={{

        maxWidth: 1250, margin: "0 auto", padding: "0 20px"
        }}>
<div className='mb-10'>
    <h1 className='text-4xl max-x:text-3xl  font-medium mb-5'>Условия покупки</h1>
    <p className='w-[600px] text-[#858585] max-x:w-[280px] max-sm:w-[340px]'>Процесс покупки недвижимости в нашем агентстве разработан таким образом,
     чтобы обеспечить максимальное удобство и прозрачность для наших клиентов</p>
</div>


<div className='flex justify-between mb-4 border-b max-md:flex-col border-b-[#ebebeb] pb-8'>
    <h2 className='font-medium max-md:text-lg'>Требуемые документы</h2>
    <div className='md:pr-[83px]'>
        <p>Физ.лицам: паспорт, ИНН</p>
        <p>Юр.лицам: учредительные документы, доверенность</p>
    </div>
</div>
<div className='flex justify-between mb-4 border-b max-md:flex-col border-b-[#ebebeb] pb-8'>
    <h2 className='font-medium max-md:text-lg'>Финансовые условия</h2>
    <div className='md:pr-2.5'>
        <p>Способы оплаты: наличные, банковский перевод, ипотека</p>
        <p>Доп.расходы: налоги, комиссия агентства, нотариальные услуги</p>
    </div>
</div>
<div className='flex justify-between max-md:flex-col mb-4 border-b border-b-[#ebebeb] pb-8'>
    <h2 className='font-medium max-md:text-lg '>Ипотека и кредитование</h2>
    <div className='md:pr-[292px]'>
        <p>Варианты ипотеки</p>
        <p>Сотрудничающие банки</p>
    </div>
</div>
<div className='flex justify-between max-md:flex-col mb-4 border-b border-b-[#ebebeb] pb-8'>
    <h2 className='font-medium max-md:text-lg'>Гарантии и обязательства</h2>
    <div className='w-[505px] max-sm:w-[340px] max-x:w-[280px] md:pl-10'>
        <p>Обязательства агентства: проверка документов, сопровождение сделки</p>
        <p>Гарантии покупателю: юридическая чистота сделки, сопровождение до регистрации собственности</p>
    </div>
</div>
<div className='flex justify-between max-md:flex-col mb-48 border-b border-b-[#ebebeb] pb-8'>
    <h2 className='font-medium max-md:text-lg'>Условия возврата и расторжения</h2>
    <div className=' md:pr-[151px]'>
        <p>Порядок расторжения договора</p>
        <p>Условия возврата средств (если применимо)</p>
    </div>
</div>
    </div>
  )
}

export default Terms