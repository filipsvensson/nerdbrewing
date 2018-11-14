import React from 'react';
import instagramLogo from '../icons/instagram.svg';

const GalleryItem = () => (
  <div className="gallery-item">
    <figure>
      <img
        src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop"
        className="gallery-image"
        alt=""
      />
      <div className="image-caption">
        So many nice reviews and photos are appearing after the systembolaget release of
        Indexoutofbounds, like this amazing one from @swedishbeergeek. Thanks to all you beer nerds
        out there!
      </div>
      <div className="gallery-image-footer">
        <span>5 days ago</span>
        <img className="social-logo" src={instagramLogo} alt="" />
      </div>
    </figure>
  </div>
);

export default GalleryItem;
