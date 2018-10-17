import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Gallery from '../components/Photo/Gallery'
import Img from 'gatsby-image'

export const BusinessPageTemplate = ({
  title,
  meta_title,
  meta_description,
  text,
  header,
  services,
  photos,
}) => {
  services.forEach((s) => {
    s.photo = photos.find((p) => p.node.sizes.originalName === s.image)
  })
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description}/>
      </Helmet>
      <Header title={title} />
      <section>
        <div className='container'>
          <div className='section'>
            <h4 className='title is-4 has-text-centered'>
              {header}
            </h4>
            <div className='columns is-centered'>
              <div dangerouslySetInnerHTML={{__html: text}} className='column' />
              <div className='column has-text-centered'>
                <div className='columns is-centered'>
                  <div className='column is-10'>
                    <img src='/img/business/virtual-reality-business.jpg' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {services.map((s, index) => (
            <div key={index} className='section is-primary'>
              <h5 className='title is-5 has-text-centered' style={{marginBottom: '50px'}}>{s.header}</h5>
              <div className='columns'>
                <div className='column' dangerouslySetInnerHTML={{__html: s.text}} />
                <div className='column  has-text-centered'>
                  <div className='columns is-centered'>
                    <div className='column is-10'>
                      <Img style={{ maxWidth: '500px', maxHeight: '250px' }} sizes={s.photo.node.sizes} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    </div>
  )
}

BusinessPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  text: PropTypes.string,
  header: PropTypes.string,
  services: PropTypes.array,
}

const BusinessPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  const photos = data.allImageSharp.edges

  return (
    <BusinessPageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      text={frontmatter.text}
      header={frontmatter.header}
      services={frontmatter.services}
      photos={photos}
    />
  )
}

BusinessPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BusinessPage

export const businessPage = graphql`
  query BusinessPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        text
        header
        services {
          header
          image
          text
        }
      }
    }
    allImageSharp(filter: {id: {regex: "/business/gallery/"}}) {
      edges {
        node {
          sizes(maxWidth: 800) {
            ...GatsbyImageSharpSizes
            originalName
          }
        }
      }
    }
  }
`
