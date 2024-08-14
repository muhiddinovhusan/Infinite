import React from 'react'

const Process = () => {
    const data = [
        {
            number: 1,
            text: 'Консультация и подбор объекта',
            text2: 'Организуем просмотры объектов и помогаем вам оценить их преимущества и недостатки',
        },
        {
            number: 2,
            text: 'Юридическое сопровождение',
            text2: 'Обеспечение соблюдения законодательства и защиты интересов клиента',
        },
        {
            number: 3,
            text: 'Оформление сделки',
            text2: 'Подготовка и подписание всех необходимых документов. Осуществление  оплаты',
        },
        {
            number: 4,
            text: 'Услуги по управлению недвижимостью',
            text2: 'Наши специалисты обеспечат полный спектр услуг по управлению вашим объектом',
        },
    ]
    return (
        <div  style={{

            maxWidth: 1250, margin: "0 auto", padding: "0 20px"
        }}>
            <h1 className='text-4xl font-medium mb-10'>Процесс покупки недвижимости</h1>
            

            <div className='flex mb-20 max-md:border-l max-sm:pl-6 max-md:pl-9 max-md:border-l-[#ebebeb] md:border-t-[#ebebeb] md:border-t pt-8 max-md:flex-col  gap-4 max-md:gap-7 '>
                {
                    data.map((item, i) => (
                        <div className='md:w-1/4 max-md:flex gap-6 max-sm:flex-col relative'>
                                                    <div className='absolute md:-top-9 md:left-10 max-md:hidden  transform w-2 h-2 bg-[#E1AF93] rounded-full' />


                            <div className='flex  justify-center   items-center bg-[#E1AF93] text-white w-20 h-20 max-md:h-16 max-md:w-16 rounded-full'>
                                <span className='text-3xl max-md:text-2xl font-semibold'>0{item.number}</span>
                            </div>
                            <div className=''>
                                <h1 className='font-medium text-2xl mb-3 w-11/12'>{item.text}</h1>
                                <p className='text-[#858585] max-sm:w-[310px]  max-md:w-[390px]'>{item.text2}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Process