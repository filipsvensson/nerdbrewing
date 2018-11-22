import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import api from '../api/api';

import './Gallery.css';

const temp = [
  {
    src:
      'https://instagram.fgse1-1.fna.fbcdn.net/vp/167b51996074cb53a65f23dc4ef180fa/5CAF468D/t51.2885-15/e35/44746682_280591682458977_4596905999421223753_n.jpg',
    created: '1 november',
    text: 'Coffee time! ☕☕☕',
    link: 'https://www.instagram.com/p/BppgxthAQkE/'
  },
  {
    src:
      'https://instagram.fgse1-1.fna.fbcdn.net/vp/5a8c37b56ab457a7cfd401b4b3f742cc/5C6A1608/t51.2885-15/e35/43913438_396013284269316_3741626738888284337_n.jpg',
    created: 'october 29',
    text: 'Testing testing... #nerdbrewing #reinheitsgebot',
    link: 'https://www.instagram.com/p/BpiCvHpF4lj/'
  }
];

const LoadState = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};

class Gallery extends Component {
  state = {
    images: null,
    current: LoadState.LOADING
  };

  async componentDidMount() {
    let images;

    try {
      images = await api.fetchImages();

      this.setState({ current: LoadState.SUCCESS, images });
    } catch (error) {
      this.setState({ current: LoadState.ERROR });
    }
  }

  render() {
    const { images, current } = this.state;

    if (current === LoadState.LOADING) {
      return (
        <div className="loding-container">
          <div class="loding-box" />
        </div>
      );
    }

    if (current === LoadState.ERROR) {
      return null;
    }

    return (
      <div className="container">
        <div className="gallery">
          <GalleryItem image={images[0] || {}} />
          <GalleryItem image={images[1] || {}} />
          <GalleryItem image={images[2] || {}} />
          <GalleryItem image={images[3] || {}} />
          <GalleryItem image={images[4] || temp[0]} />
          <GalleryItem image={images[5] || temp[1]} />
        </div>
      </div>
    );
  }
}

export default Gallery;
