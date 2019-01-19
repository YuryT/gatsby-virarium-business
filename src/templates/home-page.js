import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Offerings from '../components/Offerings'
import Gallery from '../components/Photo/Gallery'
import Testimonials from '../components/Testimonials'
import { graphql } from 'gatsby'

export const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  photos,
  testimonials,
}) => (
  <Layout>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-bold'>
      <iframe
        className='home-video-iframe'
        width='100%'
        src='https://www.youtube.com/embed/Fhdw0pZP8Cs?controls=0'
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
      />
    </section>
    <section className='section section--gradient'>
      <div className='container'>

        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div style={{textAlign: 'center'}}>
                  <h1 className='title is-1'>{heading}</h1>
                  <h2 className='subtitle'>{description}</h2>
                </div>
                <h3 className='title has-text-centered'>{offerings.description}</h3>
                <Offerings gridItems={offerings.blurbs} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='container'>
        <div className='section'>
          <h2 className='title has-text-weight-semibold is-size-2 has-text-centered'>Фотогалерея</h2>
          <Gallery photos={photos} />
        </div>
      </div>
    </section>
    <section>
      <div className='container'>
        <div className='section'>
          <h2 className='title has-text-weight-semibold is-size-2 has-text-centered'>Отзывы</h2>
          <Testimonials testimonials={testimonials} />
        </div>
      </div>
    </section>
  </Layout>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    description: PropTypes.string,
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

const HomePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const photos = data.allImageSharp.edges

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
      offerings={frontmatter.offerings}
      photos={photos}
      testimonials={frontmatter.testimonials}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        offerings {
          description
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
    allImageSharp(filter: {fluid: {originalName: {regex: "/general-photo/"}}}) {
      edges {
        node {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
