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

          <div className='columns is-centered'>
            {data.plans.map(plan => (
              <div key={plan.plan} className='column is-3'>
                <div className={`virariumPlan ${plan.isRecommended ? 'virariumPlan-recommended' : ''}`}>
                  <div className='virariumPlan-header'>
                    <h4
                      className='title has-text-centered has-text-weight-semibold'>
                      {plan.plan}
                    </h4>
                    <h5 className='title has-text-centered is-size-5'>
                      {plan.priceW ?
                        (<><div>{plan.price}</div><div>{plan.priceW}</div></>)
                        : `${plan.price}`}
                    </h5>
                  </div>
                  <div className='virariumPlan-body'>
                    <div className='virariumPlan-bodyContent has-text-weight-semibold'>
                      <div
                        dangerouslySetInnerHTML={{__html: plan.description}}/>
                    </div>
                  </div>
                </div>
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
