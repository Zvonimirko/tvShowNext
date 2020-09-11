import React from "react";

import thumbnailStyles from "./thumbnail.styles";

function Thumbnail({ imageUrl, caption }) {
  console.log(imageUrl);
  return (
    <div>
      <div className="thumbnail">
        <img src={imageUrl} className="thumbnail__image" />
        <h4 className="thumbnail__caption">{caption}</h4>

        <style jsx>{thumbnailStyles}</style>
      </div>
    </div>
  );
}

export default Thumbnail;
