import React from "react";

function Thumbnail({ imageUrl, caption }) {
  console.log(imageUrl);
  return (
    <div>
      <div className="thumbnail">
        <img src={imageUrl} className="thumbnail__image" />
        <h4 className="thumbnail__caption">{caption}</h4>

        <style jsx>{`
          .thumbnail__image {
            width: 100%;
            height: 500px;
            object-fit: contain;
          }

          .thumbnail__caption {
            text-align: center;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Thumbnail;
