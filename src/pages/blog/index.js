import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Helmet from 'react-helmet'
import Layout from '../../components/layout'
import PostCard from '../../components/PostCard'
import Header from '../../components/Header'

import config from '../../../meta/config'

export default class BlogPage extends Component {
  render () {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <Helmet>
          <title> Новости | VR клуб ViRarium </title>
        </Helmet>
        <Header title='Новости нашего клуба' />
        <section className='section'>
          <div style={{ textAlign: 'center' }} className='container'>
            <div className='title is-4'>
              Cамые свежие новости и актуальные новости можно найти в нашей группе &nbsp;
              <a href={config.vk} target='_blank'>vk.com/virarium</a>
            </div>
          </div>
        </section>
        <section className='section'>
          <div style={{ textAlign: 'center' }} className='title is-4'>
            Важные новости
          </div>
          <PostCard posts={posts} />
        </section>
      </Layout>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const blogPageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            cover
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
