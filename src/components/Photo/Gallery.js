import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Lightbox from 'react-images'

class Gallery extends Component {
  constructor (props) {
    super(props)
    const maxWidth = props.maxWidth ? props.maxWidth : '200px'
    const height = props.height ? props.height : '200px'
    this.state = {
      maxWidth,
      height,
      shareOpen: false,
      anchorEl: null,
      lightbox: false,
      photos: props.photos.map(photo => Object.assign({ srcSet: photo.node.fluid.srcSet })),
    }
  }

  gotoPrevLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo - 1 });
  }

  gotoNextLightboxImage () {
    const { photo } = this.state;
    this.setState({ photo: photo + 1 });
  }

  openLightbox (photo, event) {
    event.preventDefault();
    this.setState({ lightbox: true, photo });
  }

  closeLightbox () {
    this.setState({ lightbox: false });
  }

  render() {
    const { photos } = this.props;
    return (
      <section>
        <div className='columns is-mobile is-variable is-0-mobile'>
          {photos.map((photo, i) => (
            <div className='column'  key={i} >
              <a href={photo.node.fluid.src} onClick={e => this.openLightbox(i, e)}>
                <Img style={{ maxWidth: this.state.maxWidth, height: this.state.height }} fluid={photo.node.fluid} />
              </a>
            </div>
          ))}
        </div>
        <Lightbox
          backdropClosesModal
          images={this.state.photos}
          currentImage={this.state.photo}
          isOpen={this.state.lightbox}
          onClickPrev={() => this.gotoPrevLightboxImage()}
          onClickNext={() => this.gotoNextLightboxImage()}
          onClose={() => this.closeLightbox()}
        />
      </section>
    );
  }
}

Gallery.propTypes = {
  maxWidth: PropTypes.string,
  height: PropTypes.string,
}

export default Gallery
