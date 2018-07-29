import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'
import jumbotron from '../../../static/img/jumbotron.jpg'

const Header = ({title}) => {
  return (
    <section className='hero is-primary is-bold header-virarium' style={{backgroundImage: `url(${jumbotron})`, minHeight: '30vh'}}>
    </section>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
