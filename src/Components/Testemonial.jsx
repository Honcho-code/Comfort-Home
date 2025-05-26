import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { reviews } from '../assets/asset'

const Testemonial = () => {
  return (
    <div className='mx-4 md:mx-6 lg:mx-28 my-6 md:my-14 lg:my-20 scroll-smooth' id='testemonial'>
        <div className='block md:grid md:grid-cols-2 lg:grid-cols-3 items-center gap-5'>
            {
                reviews.map((review, key)=>(
                    <div key={key} className='w-full p-4 md:px-10 md:py-6 items-center flex flex-col border border-gray-100 mb-3 md:mb-0'>
                        <img src={review.profile_pic} alt="review-profiles" className='w-20 rounded-full mb-3' />
                        <h2 className='text-lg font-medium'>{review.name}</h2>
                        <p className='text-center font-light text-gray-700'>{review.comment}</p>
                        <div className="flex mt-2">
                            {[...Array(5)].map((star, i)=>(
                                <FontAwesomeIcon key={i} icon={i < review.rating ? solidStar : regularStar} className='text-yellow-500'/>
                            ))}
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Testemonial