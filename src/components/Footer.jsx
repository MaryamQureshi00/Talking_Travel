import React from 'react'

export const Footer = ({ page, setPage }) => {
  return (
    <footer>
      <div class="center">
        <div class="align-center">
          <div class="col">
            <a href="home">
              <img src={require('../assets/imgs/logo.png')} />
            </a>
          </div>
          <div class="col">
            <h2>Site routes</h2>
            <a href="javascript:void(0);" className={page === 'home' ? 'active' : 'inactive'} onClick={() => { setPage('home') }}  >Home</a>
            <a href="javascript:void(0);" className={page === 'story' ? 'active' : 'inactive'} onClick={() => { setPage('story') }}  >Story</a>
            <a href="javascript:void(0);" className={page === 'gallery' ? 'active' : 'inactive'} onClick={() => { setPage('gallery') }}  >Gallery</a>
            <a href="javascript:void(0);" className={page === 'contact' ? 'active' : 'inactive'} onClick={() => { setPage('contact') }}  >Contact us</a>
          </div>
          <div class="col">
            <h2>Contact us</h2>
            <a href="#">Call: +123 456789</a>
            <a target="_blank" href="#">Email: talkingtravel@gmail.com</a>
            <a target="_blank" href="#">26 York Austrailia BeCok</a>
            <div class="row df js as">
              <a href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <a href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M6 9H2V21H6V9Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <a href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M16 11.3698C16.1234 12.2021 15.9813 13.052 15.5938 13.7988C15.2063 14.5456 14.5931 15.1512 13.8416 15.5295C13.0901 15.9077 12.2384 16.0394 11.4078 15.9057C10.5771 15.7721 9.80976 15.3799 9.21484 14.785C8.61991 14.1901 8.22773 13.4227 8.09406 12.592C7.9604 11.7614 8.09206 10.9097 8.47032 10.1582C8.84858 9.40667 9.45418 8.79355 10.201 8.40605C10.9478 8.01856 11.7978 7.8764 12.63 7.99981C13.4789 8.1257 14.2648 8.52128 14.8717 9.12812C15.4785 9.73496 15.8741 10.5209 16 11.3698Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M17.5 6.5H17.51" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
              <a href="#">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.05 5C16.0267 5.19057 16.9244 5.66826 17.6281 6.37194C18.3317 7.07561 18.8094 7.97326 19 8.95M15.05 1C17.0793 1.22544 18.9716 2.13417 20.4162 3.57701C21.8609 5.01984 22.772 6.91101 23 8.94M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7293C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3147 6.72533 15.2662 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.095 3.90347 2.12787 3.62476 2.21649 3.36162C2.30512 3.09849 2.44756 2.85669 2.63476 2.65162C2.82196 2.44655 3.0498 2.28271 3.30379 2.17052C3.55777 2.05833 3.83233 2.00026 4.10999 2H7.10999C7.5953 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.10999 3.72C9.23662 4.68007 9.47144 5.62273 9.80999 6.53C9.94454 6.88792 9.97366 7.27691 9.8939 7.65088C9.81415 8.02485 9.62886 8.36811 9.35999 8.64L8.08999 9.91C9.51355 12.4135 11.5864 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9751 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0555 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
