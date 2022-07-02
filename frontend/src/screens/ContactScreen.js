import React from 'react'
import uiImg from '../images/Contact us-amico.png'
import { Col } from 'react-bootstrap'

const ContactScreen = () => {
  return (
    <div className='col-md-8 d-flex align-items-stretch'>
      <div className='info-wrap w-100 p-lg-5 p-4 img'>
        <h3>Контакти</h3>
        <p className='mb-4'>
          Обадете ни се по телефона, на разположение сме от 8:00-18:00!
        </p>
        <div className='dbox w-100 d-flex align-items-start'>
          <div className='icon d-flex flex-col align-items-center'>
            <span className='fa fa-map-marker'></span>
          </div>
          <div className='text d-flex flex-col align-items-center'>
            <p>
              <span>Адрес:</span> гр.Варна, ул.Дубровник 10
            </p>
          </div>
        </div>
        <div className='dbox w-100 d-flex align-items-start'>
          <div className='icon d-flex align-items-center justify-content-center'>
            <span className='fa fa-phone'></span>
          </div>
          <div className='text d-flex align-items-center justify-content-center'>
            <p>
              <span>Телефон за връзка:</span>
              <a href='tel://123456789'>0897525685</a>
            </p>
          </div>
        </div>
        <div className='dbox w-100 d-flex align-items-start'>
          <div className='icon d-flex align-items-center justify-content-center'>
            <span className='fa fa-paper-plane'></span>
          </div>
          <div className='text pl-3'>
            <p>
              <span>Имейл:</span>
              <a href='mailto:info@yoursite.com'>blossom@gmail.com</a>
            </p>
          </div>
        </div>
        <div className='dbox w-100 d-flex align-items-start'>
          <div className='icon d-flex align-items-center justify-content-center'>
            <span className='fa-brands fa-facebook'></span>
          </div>
          <div className='text pl-3'>
            <p>
              <span>Facebook:</span>
              <a href='#'>www.facebook.com/blossom</a>
            </p>
          </div>
        </div>
        <div className='dbox w-100 d-flex align-items-start'>
          <div className='icon d-flex align-items-center justify-content-center'>
            <span className='fa-brands fa-instagram'> </span>
          </div>
          <div className='text pl-3'>
            <p>
              <span>Instagram:</span>
              <a href='#'>www.instagram.com/blossom</a>
            </p>
          </div>
        </div>
      </div>
      <Col lg={10} md={8} sm={14}>
        <img className='w-100' src={uiImg} alt='' />
      </Col>
    </div>
  )
}

export default ContactScreen
