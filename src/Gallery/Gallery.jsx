import React from 'react';
import { useAsync } from 'react-async';
import GalleryItem from './GalleryItem';
import api from '../api/api';

import './Gallery.css';

const Gallery = () => {
  const { data: images, error, isPending } = useAsync({
    promiseFn: api.fetchImages
  });

  if (error) return null;

  if (isPending) {
    return (
      <div className="loding-container">
        <div className="loding-box" />
      </div>
    );
  }

  return (
    <div className="gallery">
      <GalleryItem image={images[0] || {}} />
      <GalleryItem image={images[1] || {}} />
      <GalleryItem image={images[2] || {}} />
      <GalleryItem image={images[3] || {}} />
      <GalleryItem image={images[4] || {}} />
      <GalleryItem image={images[5] || {}} />
    </div>
  );
};

export default Gallery;
