import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Gallery from '../components/Photo/Gallery'

export const BirthdayPageTemplate = ({
  title,
  meta_title,
  meta_description,
  text,
  header,
  photos,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <Header title={title} />
    <section>
      <div className='container'>
        <div className='section'>
          <h4 className='title is-4 has-text-centered'>
            {header}
          </h4>
          <div className='columns is-centered'>
            <div dangerouslySetInnerHTML={{ __html: text }} className='column is-5'></div>
            <div className='column is-5' style={{ textAlign: 'center' }}>
              <img alt='cake image' src='/img/cake.svg' style={{width: '150px'}} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='container'>
        <div className='section'>
          <h2 className='title has-text-weight-semibold is-size-2 has-text-centered'></h2>
          <Gallery photos={photos} maxWidth='300px' height='250px' />
        </div>
      </div>
    </section>
  </div>
)

BirthdayPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  text: PropTypes.string,
  header: PropTypes.string,
}

const BirthdayPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  const photos = data.allImageSharp.edges

  return (
    <BirthdayPageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      text={frontmatter.text}
      header={frontmatter.header}
      photos={photos}
    />
  )
}

BirthdayPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BirthdayPage

export const birthdayPage = graphql`
  query BirthdayPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        text
        header
      }
    }
    allImageSharp(filter: {id: {regex: "/birthday/gallery/"}}) {
      edges {
        node {
          sizes(maxWidth: 800) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
  }
`
