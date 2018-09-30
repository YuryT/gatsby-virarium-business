import React from 'react'
import PropTypes from 'prop-types'
import {kebabCase} from 'lodash'
import Link from 'gatsby-link'
import Content, {HTMLContent} from '../components/Content'
import SE0 from '../components/SEO'
import Header from '../components/Header'

export const QuestTemplate = ({
  content,
  contentComponent,
  cover,
  meta_title,
  meta_desc,
  tags,
  title,
  slug,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <SE0
        title={title}
        meta_title={meta_title}
        meta_desc={meta_desc}
        cover={cover}
        slug={slug}
      />
      <Header title={title}/>
      <section className='section'>
        <div className='container content'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <img src={cover} alt={title} />
              <PostContent content={content} />
              {tags && tags.length ? (
                <div style={{marginTop: `4rem`}}>
                  <h4>Tags</h4>
                  <ul className='taglist'>
                    {tags.map(tag => (
                      <li key={tag + `tag`}>
                        <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              <hr/>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

QuestTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  cover: PropTypes.string,
  meta_title: PropTypes.string,
  meta_desc: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
}

const QuestPage = ({data}) => {
  const {markdownRemark: post} = data
  return (
    <QuestTemplate
      content={post.html}
      contentComponent={HTMLContent}
      cover={post.frontmatter.cover}
      meta_title={post.frontmatter.meta_title}
      meta_desc={post.frontmatter.meta_description}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      slug={post.fields.slug}
    />
  )
}

QuestPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default QuestPage

export const pageQuery = graphql`
  query QuestByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
            slug
          }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        cover
        meta_title
        meta_description
        tags
      }
    }
  }
`
