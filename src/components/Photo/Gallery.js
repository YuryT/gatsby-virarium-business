import React, { Component } from 'react'
import Img from 'gatsby-image'
import Lightbox from 'react-images'

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shareOpen: false,
      anchorEl: null,
      lightbox: false,
      photos: props.photos.map(photo => Object.assign({ srcSet: photo.node.sizes.srcSet })),
    };
  }

  gotoPrevLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo - 1 });
  }

  gotoNextLightboxImage() {
    const { photo } = this.state;
    this.setState({ photo: photo + 1 });
  }

  openLightbox(photo, event) {
    event.preventDefault();
    this.setState({ lightbox: true, photo });
  }

  closeLightbox() {
    this.setState({ lightbox: false });
  }

  render() {
    const { photos } = this.props;
    return (
      <section>
        <div className='columns is-gapless is-mobile'>
          {photos.map((photo, i) => (
            <div className='column'  key={i} >
              <a href={photo.node.sizes.src} onClick={e => this.openLightbox(i, e)}>
                <Img style={{maxWidth: '200px', height: '200px'}} sizes={photo.node.sizes} />
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

export default Gallery
