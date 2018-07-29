import React from 'react'
import PropTypes from 'prop-types'

import Link from 'gatsby-link'
import jumbotron from '../../../static/img/jumbotron.jpg'

const Header = ({title}) => {
  return (
    <section className='hero is-primary is-bold header-virarium' style={{backgroundImage: `url(${jumbotron})`}}>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='section'>
                <h1 className='title'>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
