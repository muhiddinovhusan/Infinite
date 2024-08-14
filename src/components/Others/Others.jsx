import img1 from '../../assets/img11.png'
import img2 from '../../assets/img12.png'
import img3 from '../../assets/img13.png'
import like from '../../assets/Vector3.svg'
import './Others.css'


const Others = () => {
    const img = [
        {
            img: img1,
            price: '$700 000',
            text: 'Harizma',
            icon: like
        },
        {
            img: img2,
            price: '$120 000',
            text: 'Династия',
            icon: like
        },
        {
            img: img3,
            price: '$550 000',
            text: 'Assalom Sohil',
            icon: like
        },
    ]
    return (
        <div className='' style={{ maxWidth: 1250, margin: "0 auto", padding: "0 20px" }}>
            <h1 className='font-medium mb-11 text-4xl '>Другие ЖК</h1>
            <div className='md:flex gap-3 mb-40 sm:grid sm:grid-cols-2 max-sm:flex-col'>
                {
                    img.map((item, i) => (
                        <div key={i} className='relative max-md:w-full max-sm:mb-4 h-[500px] max-sm:w-full w-1/3 items-center '>
                            <img className='w-full  h-full object-cover' src={item.img} alt='' />
                            <div className='relative'>
                                <div className='absolute text-[#FFFFFF] -top-[70px] pl-4'>
                                    <h2 className='font-semibold text-lg mb-0.5'>{item.text}</h2>
                                    <p className='font-medium'>{item.price}</p>
                                </div>
                                <div className='absolute right-4   -top-[486px]'>
                                    <img className='w-6 h-6 filter invert brightness-0 contrast-100 ' src={item.icon} alt='' />
                                    </div>
    
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Others