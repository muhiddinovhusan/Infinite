import './Footer.css'
import instagram from '../../assets/instagram.svg'
import facebook from '../../assets/facebook.svg'
import whatsapp from '../../assets/whatsapp_line.svg'
import telegram from '../../assets/telegram_line.svg'
import logo1 from '../../assets/Building.png'
import logo from '../../assets/logo.svg'
const Footer = () => {
  return (
    <div className='w-full h-auto mb-0  pb-0 bg-[#f7f7f7] -bottom-6 pt-4 md:pt-12 sm:h-96'>
<div style={{

maxWidth: 1190, margin: "0 auto ", padding: "0 20px"
}}>

  <div className='flex items-center justify-between pb-4   border-b border-b-[#ededed]'>
  <div className='flex gap-2 '>
<img src={logo1} alt="" />

<div>

<h1 className='font mt-2 text-lg'>RMC DE LUXE</h1>
<p className='font text-[#A6A6A6] -mt-0.5'>real estate</p>
</div>
  </div>

   <div className='flex gap-2'> 
    <img src={instagram} className='h-8' alt="" />
    <img src={telegram} className='h-8' alt="" />
    <img src={whatsapp} className='h-8' alt="" />
    <img src={facebook} className='h-8' alt="" />
   </div>
  </div>
  <div  className='max-md:pb-8 border-b max-sm:grid max-sm:grid-cols-2 flex gap-36 max-md:gap-10  pt-7 border-b-[#ededed]'>
<div className=''>
<h1 className='font-medium text-lg max-md:text-[17px] mb-1.5'>Услуги</h1>
<h2 className='mb-1 text-[15px] max-md:text-[14px]'>Купить </h2>
<h2 className='mb-1 text-[15px] max-md:text-[14px]'>Арендовать </h2>
<h2 className='mb-1 text-[15px] max-md:text-[14px]'>Продать </h2>
<h2 className='mb-1 text-[15px] max-md:text-[14px]'>Оценить </h2>
</div>
<div className=''>
<h1 className='font-medium text-lg max-md:text-[17px] mb-1.5'>Недвижимость</h1>
<h2 className='mb-1 text-[15px] max-md:text-[14px]'>Квартиры </h2>
<h2 className='mb-1 text-[15px] max-md:text-[14px]'>Новостройки </h2>
<h2 className='mb-1 text-[15px] max-md:text-[14px]'>Дома и участки </h2>
<h2 className='mb-1 text-[15px] max-md:text-[14px]'>Коммерческая </h2>
</div>
<div className=''>
<h1 className='font-medium text-lg max-md:text-[17px] mb-1.5'>Компания</h1>
<h2 className='mb-1 text-[15px] max-md:text-[14px] '>О нас </h2>
<h2 className='mb-1 text-[15px] max-md:text-[14px]'>Блог </h2>
<h2 className='mb-1 text-[15px] max-md:text-[14px] '>Контакты </h2>
<h2 className='mb-1 text-[15px] max-md:text-[14px]'>Связаться </h2>
</div>
<div className=''>
<h1 className='font-medium text-lg max-md:text-[17px] mb-1.5'>Другое</h1>
<h2 className='mb-1 text-[15px] max-md:text-[14px]'>Ипотечный калькулятор </h2>
<h2 className='mb-1 text-[15px] max-md:text-[14px]'>Купить </h2>
<h2 className='mb-1 text-[15px] max-md:text-[14px] max-x:w-[130px] w-[147px]'>Инвестиции в недвижимость в Дубае </h2>
</div>
  </div>
  <div className='flex text-[#B3B3B3] -bottom-0 max-md:text-[14px] justify-between'>
<p className=' max-md:w-80 '>2024 © RMC De Luxe real estate LLC. Все права защищены</p>
<img src={logo} alt="" />
  </div>

</div>

    </div>
  )
}

export default Footer