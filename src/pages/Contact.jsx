import React from 'react'

export const Contact = () => {
  return (
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
  )
}
