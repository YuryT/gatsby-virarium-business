import React, { Component } from 'react'

import { Link } from 'gatsby'
import logo from '../../img/logo.svg'
import vk_logo from '../../img/vk-brands.svg'
import instagram_logo from '../../img/instagram-brands.svg'
import config from '../../../meta/config'

class NavBar extends Component {
  constructor (props) {
    super(props)
    const simpleLinks = [
      { to: '/pricing', text: 'Цены' },
      { to: '/quests', text: 'Квесты' },
      { to: '/birthday', text: 'Дни рождения' },
      { to: '/business', text: 'VR для организаций' },
      { to: '/blog', text: 'Новости' },
      { to: '/faq', text: 'Вопросы и Ответы' },
    ]
    this.state = {
      menuIsActive: false,
      simpleLinks,
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu () {
    const $navMenu = document.getElementById('navMenu')
    const $navButtons = document.getElementsByClassName('navbar-burger')
    // check in ie
    if ($navMenu.classList.toggle && $navButtons.length === 1) {
      $navMenu.classList.toggle('is-active')
      $navButtons[0].classList.toggle('is-active')
    }
  }

  render () {
    return (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <figure className='mage'>
              <img src={logo} alt='ViRarium' style={{width: '125px'}} />
            </figure>
          </Link>
          <button className='button navbar-burger' data-target='navMenu' onClick={this.toggleMenu}>
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className='navbar-menu' id='navMenu'>
          <div className='navbar-start'>
            {this.state.simpleLinks.map((l, index) => (
              <Link key={index} className='navbar-item' to={l.to} onClick={this.toggleMenu} >
                {l.text}
              </Link>
            ))}
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <a href={config.vk} target='_blank'>
                    <img src={vk_logo} alt='vk' style={{width: '50px'}}/>
                  </a>
                  <a href={config.instagram} target='_blank'>
                    <img src={instagram_logo} alt='vk' style={{width: '50px'}}/>
                  </a>
                  <Link
                    className='button is-primary is-outlined'
                    onClick={this.toggleMenu}
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
}

export default NavBar
