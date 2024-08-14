import vector from '../../assets/Vector.svg'
import vector2 from '../../assets/Vector2.svg'
import img3 from '../../assets/img3.svg'
import img4 from '../../assets/img4.svg'
const PhotoGalery = () => {
  return (
    <div className=''  style={{

      maxWidth: 1250, margin: "0 auto", padding: "0 20px"
      }}>
<div className='flex justify-between  mb-6'>
<h1 className='font-medium text-3xl'>
Фотогалерея и видеотуры
</h1>

<div className='flex  gap-2  max-md:hidden'>
<button className='w-11 h-11  flex justify-center items-center rounded-full border-black border'>
<img src={vector} className='h-3 filter invert' alt="" />
</button>
<button className='w-11 h-11 flex justify-center items-center text-xl rounded-full border-black border'>
<img src={vector2} className='h-3 filter invert' alt="" />
</button>
</div>
</div>
<div className='flex overflow-x-auto max-sm:h-[300px] h-[550px] max-md:h-[475px]  gap-4 mb-6'>
<img src={img3} className='w-full h-full object-cover' alt="" />
<img src={img4}  alt="" />
</div>

<div className=' flex items-center mb-36 justify-center '>
<button className='bg-[#E1AF93] hover:border-black hover:border text-[#ffffff] w-52 max-sm:w-1/2 font-semibold text-sm h-11'>Посмотреть всё</button>
</div>
    </div>
  )
}

export default PhotoGalery