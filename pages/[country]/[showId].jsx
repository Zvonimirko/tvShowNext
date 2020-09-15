import React from "react";
import axios from "axios";
import parse from "html-react-parser";
import Link from "next/link";

import Cast from "../../components/cast/Cast";
import Header from "../../components/header/Header";

function ShowDetails({ show, country }) {
  const { name, image, summary, _embedded } = show;
  // let parsedSummary = summary.replace(/<\/?[^>]+(>|$)/g, "");
  const style = {
    backgroundImage: `url(${image.original})`,
    marginTop: "10px",
  };

  return (
    <div className="show-details">
      <Header />
      <div className="show-details__poster" style={style}></div>
      <h1>{name}</h1>
      {summary ? parse(summary) : ""}
      {_embedded.cast.length ? <Cast cast={_embedded.cast} /> : ""}
      <div className="back-button__container">
        <Link href="/[country]/" as={`/${country}/`}>
          <a className="back-button">Back</a>
        </Link>
      </div>

      <style jsx>{`
        .show-details__poster {
          height: 400px;
          background-size: cover;
          width: 40%;
          background-position: center -100px;
          margin: 0 auto;
        }

        .back-button {
          border: 1px solid black;
          padding: 2px 10px;
        }

        .back-button:hover {
          color: white;
          background-color: black;
        }

        .back-button__container {
          display: flex;
          justify-content: center;
          padding-bottom: 10px;
        }
      `}</style>
    </div>
  );
}

ShowDetails.getInitialProps = async (context) => {
  const id = context.query.showId;
  const country = context.query.country;
  const response = await axios(`http://api.tvmaze.com/shows/${id}?embed=cast`);

  return { show: response.data, country };
};

export default ShowDetails;
