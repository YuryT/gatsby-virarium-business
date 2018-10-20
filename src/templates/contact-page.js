import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Header from '../components/Header'
import Contact from '../components/Contact/index'
import config from '../../meta/config'

export const ContactPageTemplate = ({
  title,
  meta_title,
  meta_description,
  contacts,
}) => {
  return (
    <Layout>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <Header title={title} />
      <section className='section'>
        <div className='container'>
          {contacts.map((contact, id) =>
            <Contact
              key={id}
              title={contact.title}
              email={config.email}
              description={contact.description}
              map={contact.map}
              phone={config.phone}
              schedule={contact.schedule}
            />
          )}
        </div>
      </section>
    </Layout>
  )
}

ContactPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  contacts: PropTypes.array,

}

const ContactPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  return (
    <ContactPageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      contacts={frontmatter.contacts}
    />
  )
}

ContactPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ContactPage

export const contactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        contacts {
          title
          schedule
          description
          map {
          src
          href
          }
        }
      }
    }
  }
`
