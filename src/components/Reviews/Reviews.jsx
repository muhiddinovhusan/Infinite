import ReviewsCard from "./ReviewsCard";
import ReviewCard from "./ReviewsCard";

const Reviews = () => {

    const data = [
      {
        name: 'Иванов Иван Иванович',
        comment: 'Живу в ЖК Infinity уже несколько месяцев и абсолютно доволен своим выбором. Комплекс расположен в тихом районе, но при этом в шаговой доступности от всех необходимых магазинов и кафе. Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная. Особенно нравится, что есть детская площадка и зона для отдыха, где мы проводим время с семьей. Рекомендую всем, кто ищет комфортное жилье!'
      },
      {
        name: 'Петров Петр Петрович',
        comment: 'Купил квартиру в ЖК Infinity и остался очень доволен. Инфраструктура на высшем уровне – рядом находятся все основные удобства: торговые центры, школы и медицинские учреждения. Также приятно удивило качество строительства и отделки – все сделано на совесть. Большое спасибо за внимательное отношение и профессионализм сотрудников. Теперь у нас есть уютное и современное жилье, в котором мы чувствуем себя как дома. Приятно также удивило наличие зелёных зон и уютных мест для отдыха на территории. Проживание здесь действительно приятно и комфортно'
      },
      {
        name: 'Алексеев Алексей Алексеевич',
        comment: 'Очень рад, что выбрал ЖК Infinity. Комплекс расположен в удобном месте с хорошей транспортной доступностью. Внутреннее оформление и планировка квартир продуманы до мелочей, что делает жизнь здесь комфортной. Мне особенно нравится, что у нас есть доступ к различным удобствам прямо на территории комплекса – спортзал, бассейн, зоны для отдыха. Отличное место для жизни и отдыха! Квартира просторная, с современным ремонтом, а территория комплекса ухоженная и безопасная.'
      },
      {
        name: 'Максимов Максим Максимович',
        comment: 'Жилой комплекс Infinity – это отличный выбор для тех, кто ценит комфорт и современность. Мне особенно нравится, что комплекс оборудован современными системами безопасности, а также имеется подземный паркинг, что очень удобно. Приятно также удивило наличие зелёных зон и уютных мест для отдыха на территории. Проживание здесь действительно приятно и комфортно'
      }
    ];
  
    return (
      <div style={{ maxWidth: 1250, margin: "0 auto", padding: "0 20px" }}>
        <h1 className='text-[40px] max-x:text-3xl font-medium mb-8'>Отзивы покупателей</h1>
        <div className='flex gap-4 mb-10 overflow-x-scroll pb-4'>
          {data.map((item, i) => (
            <ReviewsCard
              key={i}
              name={item.name}
              comment={item.comment}
            />
          ))}
        </div>
        <div className="flex justify-center mb-48 items-center">

        <button className='bg-[#E1AF93] max-x:w-[150px] max-x:h-[38px] max-x:text-xs hover:border-black hover:border text-[#ffffff] w-48 max-sm:w-1/2 font-semibold text-sm h-11'>Все отзывы</button>
        </div>

      </div>
    );
  }
  
  export default Reviews;
  