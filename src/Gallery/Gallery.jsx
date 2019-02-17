import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import api from '../api/api';

import './Gallery.css';

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
          <div className="loding-box" />
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
          <GalleryItem image={images[4] || {}} />
          <GalleryItem image={images[5] || {}} />
        </div>
      </div>
    );
  }
}

export default Gallery;
