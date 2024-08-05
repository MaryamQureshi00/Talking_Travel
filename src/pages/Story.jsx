import React from 'react'

export const Story = () => {
  return (
    <div className='why-us df jc ac'>
    <div className='text-align df js as fc'>
      <svg viewBox="0 0 25 25" fill="none">
        <g clip-path="url(#clip0_723_3)">
          <path d="M17.3298 18.3615C17.3298 17.0354 16.803 15.7637 15.8653 14.826C14.9277 13.8883 13.6559 13.3615 12.3298 13.3615C11.0037 13.3615 9.73196 13.8883 8.79428 14.826C7.8566 15.7637 7.32981 17.0354 7.32981 18.3615" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12.3298 2.36153V9.36153" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M4.54981 10.5815L5.96981 12.0015" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M1.32981 18.3615H3.32981" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M21.3298 18.3615H23.3298" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M18.6898 12.0015L20.1098 10.5815" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M23.3298 22.3615H1.32981" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M8.32981 6.36153L12.3298 2.36153L16.3298 6.36153" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_723_3">
            <rect width="24" height="24" fill="white" transform="translate(0.329809 0.361526)" />
          </clipPath>
        </defs>
      </svg>
      <h2>WHY CHOOSE US?</h2>
      <p>
        It’s our passion and our expertise, and has been for over two decades. We know the trails and the towns inside and out. We know the hoteliers and their rooms, and restauranteurs and their menus. We don’t guide on any route we haven’t done many times before. Our expertise gives you a richer, more enjoyable experience, and we will makes better use of your time.
        <br /><br />
        We provide a thorough and complete orientation, so you are fully prepared to make the most of your Swiss vacation or Alps hiking adventure. Your expert trip leader is with you for the entire trip.
      </p>
      <button>Learn more</button>
    </div>
    <img src={require('../assets/imgs/choose.jpg')} />
  </div>
  )
}
