
import React from 'react'
import PropTypes from 'prop-types'

// TODO fix workaround for href in description
const Pricing = ({ data }) => (
  <div className='section'>
    <h2 className='has-text-weight-semibold is-size-2'
      style={{textAlign: 'center'}}
      dangerouslySetInnerHTML={{ __html: data.heading }}
    />
    <div className='columns'>
      <div className='column is-10 is-offset-1'>
        <div className='content'>
          <p className='is-size-5'>{data.description}</p>

          <div className='columns'>
            {data.plans.map(price => (
              <div key={price.plan} className='column'>
                <section className='section' style={{border: '1px solid #eaecee', height: '100%'}}>
                  <h4 className='title has-text-centered has-text-weight-semibold'>
                    {price.plan}
                  </h4>
                  <h5 className='title has-text-centered is-size-5'>
                    Цена: {price.price}
                  </h5>
                  <div className='has-text-weight-semibold'>
                    <div dangerouslySetInnerHTML={{ __html: price.description }} />
                  </div>
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

Pricing.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    heading: PropTypes.string,
    plans: PropTypes.arrayOf(
      PropTypes.shape({
        plan: PropTypes.string,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        description: PropTypes.string,
      })),
  }),
}

export default Pricing
