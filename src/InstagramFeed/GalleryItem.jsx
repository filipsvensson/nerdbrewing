import React, { Component } from 'react';

class GalleryItem extends Component {

  render() {
    return (
      <div className="gallery-item" tabIndex="0">
        <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt="" />
			</div>
    );
  }

}

// https://scontent.cdninstagram.com/vp/917d853cae2c5993a22ff50dabcbbbe4/5C6EE358/t51.2885-15/sh0.08/e35/s640x640/44685714_289906638296530_9106327596830751863_n.jpg"

export default GalleryItem;
