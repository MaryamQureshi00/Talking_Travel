import React from 'react'

export const Home = () => {
  return (
    <>
      <div className='hero-banner df jc ac fc' >
        <h1>
          <span>Let’s talk</span> about your next trip!
        </h1>
        <p>
          Share your favorite travel destination and we will feature it in our next blog!
        </p>
        <button>Start Your Journey</button>
      </div>
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
      <div className='highlight-bar df jc ac fc' >
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_724_12)">
            <path d="M12.2729 15.7897C16.1389 15.7897 19.2729 12.6557 19.2729 8.78967C19.2729 4.92368 16.1389 1.78967 12.2729 1.78967C8.40696 1.78967 5.27295 4.92368 5.27295 8.78967C5.27295 12.6557 8.40696 15.7897 12.2729 15.7897Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.48295 14.6797L7.27295 23.7897L12.2729 20.7897L17.2729 23.7897L16.0629 14.6697" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
          <defs>
            <clipPath id="clip0_724_12">
              <rect width="24" height="24" fill="white" transform="translate(0.272949 0.789673)" />
            </clipPath>
          </defs>
        </svg>
        <h2>20 YEARS EXPERIENCES</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated.</p>
      </div>
      <div className='about-us df jc ac rr' >
        <div className='text-align df js as fc'>
          <svg viewBox="0 0 25 25" fill="none">
            <g clip-path="url(#clip0_725_15)">
              <path d="M1.27295 6.78967V22.7897L8.27295 18.7897L16.2729 22.7897L23.2729 18.7897V2.78967L16.2729 6.78967L8.27295 2.78967L1.27295 6.78967Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8.27295 2.78967V18.7897" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16.2729 6.78967V22.7897" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_725_15">
                <rect width="24" height="24" fill="white" transform="translate(0.272949 0.789673)" />
              </clipPath>
            </defs>
          </svg>

          <h2>WHO WE ARE?</h2>
          <p>
            It’s our passion and our expertise, and has been for over two decades. We know the trails and the towns inside and out. We know the hoteliers and their rooms, and restauranteurs and their menus. We don’t guide on any route we haven’t done many times before. Our expertise gives you a richer, more enjoyable experience, and we will makes better use of your time.
            <br /><br />
            We provide a thorough and complete orientation, so you are fully prepared to make the most of your Swiss vacation or Alps hiking adventure. Your expert trip leader is with you for the entire trip.
          </p>
          <button>Get Started</button>
        </div>
        <img src={require('../assets/imgs/about.jpg')} />
      </div>
      <div className='highlight-page df js as fc' >
        <svg viewBox="0 0 25 25" fill="none">
          <path d="M12.2729 2.78967L15.3629 9.04967L22.2729 10.0597L17.2729 14.9297L18.4529 21.8097L12.2729 18.5597L6.09295 21.8097L7.27295 14.9297L2.27295 10.0597L9.18295 9.04967L12.2729 2.78967Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <h2>PLACES WE COVER MORE THAN YOU SEE</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated.</p>
        <button>
          Ready to go
        </button>
      </div>
      <div className='brand-co df jc ac fc' >
        <h2>WE ARE FEATURED IN</h2>
        <div className='rad-line' ></div>
        <div className='block-co df jc ac' >
          <img src={require('../assets/imgs/banner-1.png')} />
          <img src={require('../assets/imgs/banner-2.png')} />
          <img src={require('../assets/imgs/banner-3.png')} />
          <img src={require('../assets/imgs/banner-4.png')} />
          <img src={require('../assets/imgs/banner-5.png')} />
        </div>
      </div>
      <div className='gallery df js ac fc' >
        <h2>Gallery</h2>
        <p>Our wide collection about your love life</p>
        <div className='block-co df jc ac' >
          <div className='img-card df jc ac' >
            <img src="https://source.unsplash.com/random/900×400/?beach+lady" />
          </div>
          <div className='img-card df jc ac' >
            <img src="https://source.unsplash.com/random/900×400/?forest+men" />
          </div>
          <div className='img-card df jc ac' >
            <img src="https://source.unsplash.com/random/900×400/?ship+couple" />
          </div>
          <div className='img-card df jc ac' >
            <img src="https://source.unsplash.com/random/900×400/?girl+walking" />
          </div>
          <div className='img-card df jc ac' >
            <img src="https://source.unsplash.com/random/900×400/?road+couple" />
          </div>
        </div>
      </div>
      <div className='contact df jc ac'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212497.56393743303!2d55.11349411879255!3d25.0987785383332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e1!3m2!1sen!2s!4v1715465397134!5m2!1sen!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <form className='df js as fc'>
          <h2>Contact Us</h2>
          <p>Response within a minute, flash fast traveling experience.</p>
          <div className='no-gap df fc' >
            <label>Subject</label>
            <input type='text' />
          </div>
          <div className='no-gap df fc' >
            <label>Email</label>
            <input type='text' />
          </div>
          <div className='no-gap df fc' >
            <label>Message</label>
            <textarea></textarea>
          </div>
          <input type='submit' />
        </form>
      </div>
    </>
  )
}
