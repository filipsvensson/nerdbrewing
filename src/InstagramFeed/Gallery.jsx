import React, { Component } from 'react';
import GalleryItem from './GalleryItem'

import './Gallery.css'

class Gallery extends Component {

  render() {
    return (
      <div className="container">
        <div className="gallery">
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
          <GalleryItem />
        </div>
      </div>
    );
  }

}

export default Gallery;
