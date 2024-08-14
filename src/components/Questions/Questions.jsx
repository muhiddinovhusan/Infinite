import img from '../../assets/img10.svg'
const Questions = () => {

  const input =[
    {placeholder:'ФИО '},
    {placeholder:'Номер телефона  '},
    {placeholder:'E-mail '},
    {placeholder:'Ваш вопрос '},
  ] 
  return (
    <div className='  h-auto' style={{ maxWidth: 1250, margin: "0 auto", padding: "0 20px" }}>
        <div className='mb-48 h-auto flex  max-md:flex-col'>

<div className='  max-md:h-auto max-md:order-2 px-6 pt-6 pb-10  md:pt-[50px] md:px-[50px] bg-[#EDF3F5] md:w-7/12 '>
<h2 className='font-medium w-2/3 text-2xl md:text-[40px]  '>
Остались вопросы? Свяжитесь с нами
</h2>
{
    input.map((item,i)=>(
      <input key={i} type='text' className='mb-4 md:mb-6 bg-[#EDF3F5]  block  max-md:w-full text-sm border-b-2 h-12 border-b-[#E1E1E1] w-80' placeholder={item.placeholder} />
    ))
}
<button className='bg-[#E1AF93] mt-5 md:mt-8 hover:border-black hover:border text-[#ffffff] w-48 max-sm:w-1/2 font-semibold text-sm h-11'>Отправить</button>

</div>
<div className='md:w-5/12 max-md:h-[300px] max-md:order-1'>
<img src={img} className='w-full h-full object-cover' alt="" />
</div>
        </div>
    </div>
  )
}

export default Questions