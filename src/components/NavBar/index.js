import React from 'react'
import Link from 'gatsby-link'
import logo from '../../img/logo.svg'
import vk_logo from '../../img/vk-brands.svg'
import instagram_logo from '../../img/instagram-brands.svg'

const NavBar = () => {
  return (
    <nav className='navbar is-fixed-top' aria-label='main navigation'>
      <div className='navbar-brand'>
        <Link to='/' className='navbar-item'>
          <figure className='mage'>
            <img src={logo} alt='ViRarium' style={{ width: '125px' }} />
          </figure>
        </Link>
        <button className='button navbar-burger' data-target='navMenu'>
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className='navbar-menu' id='navMenu'>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/pricing' >
                        Цены
          </Link>
          <Link className='navbar-item' to='/quests' >
                        Квесты
          </Link>
          <Link className='navbar-item' to='/birthday'>
                        Дни рождения
          </Link>
          <Link className='navbar-item' to='/news'>
                        Другие услуги
          </Link>
          <Link className='navbar-item' to='/blog'>
                        Новости
          </Link>
          <Link className='navbar-item' to='/news'>
                        VKnewsfeed
          </Link>
        </div>
        <div className='navbar-end'>
          <div className='navbar-item'>
            <div className='field is-grouped'>
              <p className='control'>
                <a href='https://vk.com/virarium' target='_blank'>
                  <img src={vk_logo} alt='vk' style={{ width: '50px' }} />
                </a>
                <a href='https://www.instagram.com/virarium_vr_club/' target='_blank'>
                  <img src={instagram_logo} alt='vk' style={{ width: '50px' }} />
                </a>
                <Link
                  className='button is-primary is-outlined'
                  activeClassName="active-menu"
                  to='/contact'>
                                    Контакты
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
