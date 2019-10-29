import React from 'react'
import PropTypes from 'prop-types'

import jumbotron from '../../../static/img/jumbotron2.jpg'

const Header = ({title}) => {
  return (<section className='hero is-primary is-bold' style={{backgroundImage: `url(${jumbotron})`}}>
    <div className='hero-body'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-10 is-offset-1'>
            <div className='' style={{padding: '0 24px'}}>
              <h1 className='title'>
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>)
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
