import React from "react";

import Link from "next/link";

import thumbnailStyles from "./thumbnail.styles";

function Thumbnail({ imageUrl, caption, href, as }) {
  return (
    <div>
      <div className="thumbnail">
        <Link href={href} as={as}>
          <a>
            <img src={imageUrl} className="thumbnail__image" />
            <h4 className="thumbnail__caption">{caption}</h4>
          </a>
        </Link>
        <style jsx>{thumbnailStyles}</style>
      </div>
    </div>
  );
}

export default Thumbnail;
