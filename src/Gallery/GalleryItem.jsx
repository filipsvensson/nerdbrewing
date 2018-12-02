import React from 'react';
import PropTypes from 'prop-types';
import instagramLogo from '../icons/instagram.svg';

const GalleryItem = ({ image: { src, text, created, link } }) => (
  <div className="gallery-item">
    <figure>
      <img src={src} className="gallery-image" alt="" />
      <div className="image-caption">
        <p>{text}</p>
      </div>
      <div className="gallery-image-footer">
        <span>{created}</span>
        <a href={link}>
          <img className="social-logo" src={instagramLogo} alt="" />
        </a>
      </div>
    </figure>
  </div>
);

GalleryItem.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    text: PropTypes.string,
    created: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  }).isRequired
};

export default GalleryItem;