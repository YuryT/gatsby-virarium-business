import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Header from '../components/Header'
import Pricing from '../components/Pricing'

export const PricingPageTemplate = ({
  title,
  meta_title,
  meta_description,
  pricing_solo,
  pricing_group,
  pricing_cert,
}) => (
  <Layout>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <Header title={title} />
    <Pricing data={pricing_solo} />
    <div className='hero is-primary'>
      <Pricing data={pricing_group} />
    </div>
    <div className='hero'>
      <Pricing data={pricing_cert} />
    </div>
  </Layout>
)

PricingPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  pricing_solo: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
  pricing_group: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
  pricing_cert: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),

}

const PricingPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <PricingPageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      pricing_solo={frontmatter.pricing_solo}
      pricing_group={frontmatter.pricing_group}
      pricing_cert={frontmatter.pricing_cert}
    />
  )
}

PricingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PricingPage

export const pricingPageQuery = graphql`
  query PricingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        pricing_solo {
          heading
          description
          plans {
            description
            plan
            price
          }
        }
        pricing_group {
          heading
          description
          plans {
            description
            plan
            price
          }
        }
        pricing_cert {
          heading
          description
          plans {
            description
            plan
            price
          }
        }
      }
    }
  }
`
