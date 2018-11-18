import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import api from '../api/api';

import './Gallery.css';

class Gallery extends Component {
  state = {
    images: []
  };

  async componentDidMount() {
    const images = await api.fetchImages();
    this.setState({ images });
    console.log(images);
  }

  render() {
    const { images } = this.state;

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
