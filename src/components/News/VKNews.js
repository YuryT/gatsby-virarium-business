import React, { Component } from 'react'

export default class VKNews extends Component {
  onLoad = () => {
    window.VK.Widgets.Group(
      'vk_groups',
      {mode: 4, wide: 1, no_cover: 1, width: 'auto', height: '1000'},
      162627150
    )
    // const map = new window.google.maps.Map(
    //   document.getElementById(this.props.id),
    //   this.props.options
    // )
    // this.props.onMount(map)
  }

  componentDidMount() {
    if (!window.VK) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = `https://vk.com/js/api/openapi.js?159`;
      const headScript = document.getElementsByTagName('script')[0];
      headScript.parentNode.insertBefore(script, headScript);
      script.addEventListener('load', () => {
        this.onLoad()
      })
    } else {
      this.onLoad()
    }
  }

  render () {
    return <div style={{margin: '0 auto', maxWidth: '500px'}} id='vk_groups' />
  }
}