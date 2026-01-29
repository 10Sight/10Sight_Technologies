import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({ data, aos = 'fade-up', loading = 'eager' }) => {
  return (
    <Link to={data?.link} data-aos={aos} className='relative bg-white rounded-[1rem] shadow-lg overflow-hidden max-w-[22rem] max-h-[22rem] group hover:shadow-xl'>
      <img src={data?.image} alt={data?.title} loading={loading} className='w-full translate-transform duration-700 group-hover:scale-[1.15] h-auto' />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-500 via-transparent to-transparent flex items-end justify-center hover:from-[10%] hover:from-black  hover:to-transparent transition-all duration-300">
        <div className="relative z-10 text-center text-white mb-7">
          <div className="mb-10 bg-gray-400 p-4 mx-auto w-fit rounded-lg">
            <img src={data?.icon} alt="Icon" className='w-8 h-auto mx-auto transition-colors duration-300 group-hover:text-gray-800' style={{ color: 'currentColor' }} />
          </div>
          <div tabIndex="0" className='text-[1.4rem] sora-600 leading-tight'>
            <h2 dangerouslySetInnerHTML={{ __html: data?.title }}></h2>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ServiceCard
