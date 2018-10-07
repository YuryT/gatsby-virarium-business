import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Offerings from '../components/Offerings'
import Gallery from '../components/Photo/Gallery'
import Testimonials from '../components/Testimonials'

export const HomePageTemplate = ({
  title,
  heading,
  description,
  image,
  offerings,
  meta_title,
  meta_description,
  photos,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <section className='hero is-primary is-bold'>
      <video id='mainPageVideo' poster={image} style={{width: '100%'}} controls>
        <source src='/video/virarium.mp4' type='video/mp4' />
      </video>
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
  </div>
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

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  const photos = data.allImageSharp.edges

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      image={frontmatter.image}
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
        image
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
    allImageSharp(filter: {id: {regex: "/photos/"}}) {
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
