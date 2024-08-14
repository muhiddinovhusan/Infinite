import React from 'react'
import img from '../../assets/Building.png'
import img1 from '../../assets/Vector3.svg'
import img2 from '../../assets/Vector1.svg'
import img3 from '../../assets/Vector4.svg'
import './Navbar.css'
import { Bell, BellDot, Heart, HeartIcon, PhoneCall, Search } from 'lucide-react'
const Header = () => {
  return (
    <div className='flex mb-2 h-16'  style={{

      maxWidth: 1250, margin: "0 auto", padding: "0 20px"
    }}>
<div className='w-1/4  gap-2  max-md:w-2/4 flex '>
{/* <div className='w-7 h-full '>

</div> */}
<img src={img} alt="" />
<div>

<h1 className='font mt-2 text-lg'>RMC DE LUXE</h1>
<p className='font text-[#A6A6A6] -mt-0.5'>real estate</p>
</div>

</div>
<div className='w-2/4 max-md:hidden   gap-10 justify-center flex items-center'>
<select name="" id="">
  <option value="">Услуги</option>

</select>
<h2>О нас</h2>
<h2>Блог</h2>
<h2>Контакты</h2>
</div>
<div className='w-1/4 max-md:w-2/4 gap-4 flex justify-end items-center '>
<div className='w-12 h-12 rounded-3xl flex justify-center items-center border'><Search size={23}/>
</div>
<div className='w-12 h-12 flex justify-center items-center rounded-3xl border'>
<img src={img1} alt="" />
</div>
<div className='w-12 h-12 rounded-3xl border max-md:hidden bg-[#333333] flex justify-center items-center'>
<img src={img2} className='h-4' alt="" />
</div>
<div className='w-12 h-12 rounded-3xl border md:hidden bg-[#333333] flex justify-center items-center'>
<img src={img3} className='h-4' alt="" />
</div>

<div className='w-16 h-12 flex max-md:hidden justify-center items-center rounded-3xl border'>
  <select name="" id="">
    <option value="">Ru</option>
  </select>
</div>
</div>
    </div>
  )
}

export default Header