import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
// import Offerings from '../components/Offerings'
import Gallery from '../components/Photo/Gallery'
import Testimonials from '../components/Testimonials'
// import ContactForm from '../components/СontactForm'
import { Link, graphql } from 'gatsby'
import bluImage from '../../static/img/TheBlu-Encounter.jpg'
import homepageImage1 from '../../static/img/vive_studio_boy.png'
import multiplayerImage from '../../static/img/payday-2-vr-vive.jpg'
import gamesImage from '../../static/img/test games.png'
import logo from '../img/logoW.svg'
import MapYandexStatic from '../components/Contact/MapYandexStatic'
import config from '../../meta/config'

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
    <section className='hero is-primary home-page-hero home-page-hero-desktop'
             style={{ backgroundImage: `url(${bluImage})` }}
    >
      <div className='hero-body'>
        <div className='container'>
          <div className='columns'>
            <img className='HomePage-boyImage column is-5-desktop is-0-mobile' src={homepageImage1} />
            <div className='column is-5 is-offset-1'>
              <div className='' style={{padding: '40px 0'}}>
                <img src={logo} alt='ViRarium' style={{width: '500px'}} />
                <h1 className='title'>
                   Kлуб виртуальной реальности
                </h1>
                <h4 className='subtitle is-4'> Твое погружение в будущее </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='hero'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-vcentered is-variable is-8'>
            <div className='column is-6'>
              <div>
                <h4 className='title is-4'>Что же такое VR?</h4>
                <div>
                  VR — аббревиатура от «virtual reality» (виртуальная реальность).
                  Это созданный техническими средствами мир,
                   который человек ощущает через разные каналы чувств.
                   VR полностью погружает человека в виртуальную реальность.
                   Tо есть: вы надеваете очки, и  оказываетесь в другой рельности.
                </div>
                <div className='is-pulled-right'>
                  <div>
                  Как это выглядит? - смотри наше видео --->
                </div>
                  {/*<div>То что еще вчера было фантастикой,</div>
                  <div> СЕГОДНЯ ты можешь испытать на себе</div>*/}
                </div>
              </div>
            </div>
            <div className='column is-6 is-pulled-left-mobile'>
              <iframe
                className='home-video-iframe'
                width='100%'
                src='https://www.youtube.com/embed/BrtV3_V9kxM'
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='hero'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-vcentered is-variable is-8'>
            <div className='column is-6'>
              <img src={multiplayerImage} />
            </div>
            <div className='column is-6'>
              <div >
                <h4 className='title is-4'>Играй с друзьями!</h4>
                С друзьями все веселей, особенно VR.
                В нашем клубе можно играть в команде до 4-х человек одновременно.
                 Если вас больше 4 человек, вы можете играть по очереди. Пока одни играют,
                остальные могут расположиться в зоне отдыха или опробовать &nbsp;
                <Link to='/quests'>VR-квест</Link> (подробнее <Link to='/birthday'>здесь</Link>)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='hero'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-vcentered is-variable is-8'>
            <div className='column is-6'>
              <div >
                <h4 className='title is-4'>Наши игры</h4>
                <div>
                У нас около 100 различных игры и vr-приключений!
                 Самых разных тематик, от медитативных экскурсий и рыбалки
                 до зомби-шутеров и средневековых дуэлей.
                 Наши администраторы обязательно помогут вам выбрать развлечение по душе.
                </div>
              </div>
            </div>
            <div className='column is-6'>
              <img src={gamesImage} />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='hero'>
      <div className='hero-body'>
        <div className='container'>
          <div className='columns is-vcentered is-variable is-8'>
            <div className='column is-6'>
              <MapYandexStatic
                href='https://yandex.ru/maps/-/CBBZvGCyDA'
                src='https://api-maps.yandex.ru/services/constructor/1.0/static/?um=constructor%3A15617c624804f9fe302d03e4d9190a625ee6a7991ddabdd20f24cf62a753aba7&amp;width=600&amp;height=360&amp;lang=ru_RU'
              />
            </div>
            <div className='column is-6'>
              <div >
                <h4 className='title is-4'>Как нас найти?</h4>
                <div>
                  Мы находимся в самом центре города. 2 минуты ходьбы от остановки "Детский мир" &nbsp;
                  <strong>ул. Плехановская  28, Воронеж</strong>
                </div>
                <hr />
                <div>Время работы:</div>
                <div>
                  <div>c 11:00 - 20:00 Будни</div>
                  <div>с 11:00 - 21:00 Суббота - Воскресение </div>
                </div>
                <div>
                  Предварительная бронь по номеру +79003096765 или в нашей группе в &nbsp;
                  <a href={config.vkMe} target='_blank'>VK</a>
                </div>
                <hr />
                <div>
                  Хотите прийти раньше 11-00? или после 20-00? Звони +79003096765 или пишите в &nbsp;
                  <a href={config.vkMe} target='_blank'>VK</a>
                </div>
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
    {/*<section>
      <div className='container'>
        <div className='section'>
          <div className='columns is-centered'>
            <div className='column is-6'>
              <h2
                className='title has-text-weight-semibold is-size-2 has-text-centered'>Забронировать</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>*/}

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
