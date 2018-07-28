
import React from 'react'
import PropTypes from 'prop-types'

const Pricing = ({ data }) => (
  <div className='columns bd-klmn-columns'>
    {data.map(price => (
      <div key={price.plan} className='column bd-notification is-primary ' >
        <section className='section' style={{border: '1px solid #eaecee', height: '100%'}}>
          <h4 className='has-text-centered has-text-weight-semibold'>
            {price.plan}
          </h4>
          <h5 className=' has-text-centered is-size-5' >
            Цена: {price.price}
          </h5>
          <p className='has-text-weight-semibold'>{price.description}</p>
        </section>
      </div>
    ))}
  </div>
)

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      duration: PropTypes.string,
    })
  ),
}

export default Pricing
