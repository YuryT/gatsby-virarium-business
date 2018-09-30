import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Header from '../components/Header'
import Gallery from '../components/Photo/Gallery'

export const QuestsPageTemplate = ({
  title,
  meta_title,
  meta_description,
  description,
  // details,
  quests,
  photos,
  questArticles,
}) => {
  questArticles.forEach((q) => {
    q.photos = photos.filter((p) => p.node.id.indexOf(q.node.frontmatter.photoFolder) !== -1)
  })
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <Header title={title} />
      <section className='section'>
        <div className='container'>
          <div className='section'>
            <div dangerouslySetInnerHTML={{ __html: description }} />
            <div>
              {/* {details.map((d) => (
                <div>
                  <div>{d.question} - {d.answer}</div>
                </div>
              ))} */}
            </div>
            {questArticles.map((q) => (
              <div className='section'>
                <h3 className='subtitle has-text-centered'>{q.node.frontmatter.name}</h3>
                <div className='columns is-centered'>
                  <div className='column is-half-desktop'>
                    <Gallery photos={q.photos} />
                  </div>
                </div>
                <div>
                  {q.node.excerpt}
                </div>
                <div className='has-text-centered'>
                  <Link to={q.node.fields.slug} className="button is-primary is-outlined">
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

QuestsPageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  description: PropTypes.string,
  details: PropTypes.array,
  quests: PropTypes.array,

}

const QuestsPage = ({data}) => {
  const {frontmatter} = data.markdownRemark
  const photos = data.allImageSharp.edges
  const questArticles = data.allMarkdownRemark.edges
  return (
    <QuestsPageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      description={frontmatter.description}
      // details={frontmatter.details}
      quests={frontmatter.quests}
      photos={photos}
      questArticles={questArticles}
    />
  )
}

QuestsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default QuestsPage

//TODO check if any reason to use fields instead of formatter
// details {
//   question
//   answer
// },
export const questsPageQuery = graphql`
  query QuestsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        description
      }
    }
    allImageSharp(filter: {id: {regex: "/quests/"}}) {
      edges {
        node {
          id
          sizes(maxWidth: 650) {
            ...GatsbyImageSharpSizes
          }
        }
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___order] },
      filter: { frontmatter: { templateKey: { eq: "onequest-page" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 600)
          id
          fields {
            slug
          }
          frontmatter {
            title
            name,
            photoFolder
          }
        }
      }
    }
  }
`
