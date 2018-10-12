import React from 'react'
import PropTypes from 'prop-types'

import MapYandexStatic from './MapYandexStatic'
import vk_logo from '../../img/vk-brands.svg'
import instagram_logo from '../../img/instagram-brands.svg'
import config from '../../../meta/config'

const Contact = ({email, phone, description, title, schedule, map}) => {
  return (
    <div
      className='columns'
      style={{border: '1px solid #eaecee', padding: '2em 4em'}}>
      <div className='column is-6-desktop'>
        <h3 className='title'>{title}</h3>
        <p>{description}</p>
        <div style={{ margin: '10px 0' }}>
          {schedule.map((s, id) => (<p key={id}>{s}</p>))}
        </div>
        <p>
          <a href={`tel:${phone}`}> Телефон: {phone}</a>
        </p>
        <p>
          <a href={`mailto:${email}`}>{email}</a>
        </p>
        <div style={{margin: '10px 0'}}>
          <p>
            <a href={config.vk} target='_blank'>
              <img src={vk_logo} alt='vk' style={{width: '15px'}}/>
              <span> {config.vk} </span>
            </a>
          </p>
          <p>
            <a href={config.instagram} target='_blank'>
              <img src={instagram_logo} alt='vk' style={{width: '15px'}}/>
              <span> {config.instagram}</span>
            </a>
          </p>
        </div>
      </div>
      <div className='column is-6-desktop'>
        {map ? (<MapYandexStatic href={map.href} src={map.src} />) : null}
      </div>

    </div>
  )
}

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  description: PropTypes.string,
  title: PropTypes.string,
  phone: PropTypes.string,
  schedule: PropTypes.array,
  map: PropTypes.object,
}

export default Contact
