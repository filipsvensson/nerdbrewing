import React, { Component } from "react";

import './InstagramFeed.css'

class InstagramFeed extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "//7499608.com/app/js/embed.min.js";
    script.async = true;
    this.tagContainer.appendChild(script);
  }

  render() {
    return (
      <div className="instagram-feed">
        <div className="taggbox-container" ref={el => (this.tagContainer = el)}>
          <div className="taggbox-socialwall" data-wall-id="nerdbrewing" />
        </div>
      </div>
    );
  }
}

export default InstagramFeed;
