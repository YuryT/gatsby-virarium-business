import React from 'react'
import PropTypes from 'prop-types'

const MapYandexStatic = ({href, src}) => {
  return (
    <a href={href} target="_blank">
      <img src={src} alt="" style={{ border: 0 }} />
    </a>
  )
}

MapYandexStatic.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
}

export default MapYandexStatic
