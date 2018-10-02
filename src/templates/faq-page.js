import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'

export const FAQTemplate = ({
  title,
  meta_title,
  meta_description,
  text,
  faqs,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <Header title={title} />
    <section className="faqs" style={{marginTop:'30px'}}>
      {faqs.map((f) => (
        <article className='message is-primary'>
          <div className='message-header'>
            <p>{f.question}</p>
          </div>
          <div className="message-body">
            <div className="accordion-content"
                 dangerouslySetInnerHTML={{__html: f.answer}}>
            </div>
          </div>
        </article>
      ))}
    </section>

  </div>
)

FAQTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  text: PropTypes.string,
  faqs: PropTypes.array,
}

const FAQ = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <FAQTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      text={frontmatter.text}
      faqs={frontmatter.faqs}
    />
  )
}

FAQ.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default FAQ

export const FAQPage = graphql`
  query FAQ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        faqs {
          question
          answer
        }
        text
      }
    }
  }
`
