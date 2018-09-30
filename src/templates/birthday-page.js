import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'

export const BirthdayPageTemplate = ({
  title,
  meta_title,
  meta_description,
  text,
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
          <div>{text}</div>
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
}

const BirthdayPage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <BirthdayPageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      text={frontmatter.text}
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
      }
    }
  }
`
