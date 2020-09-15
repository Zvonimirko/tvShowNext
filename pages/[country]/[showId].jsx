import React from "react";
import axios from "axios";
import parse from "html-react-parser";
import Link from "next/link";
// import Error from "next/error";

import Cast from "../../components/cast/Cast";
import CustomError from "../_error";

function ShowDetails({ show = {}, country, statusCode }) {
  const { name, image, summary, _embedded } = show;
  // let parsedSummary = summary.replace(/<\/?[^>]+(>|$)/g, "");

  if (statusCode) {
    return (
      <CustomError
        statusCode={statusCode}
        title="Ooops! There was a problem with address..."
      />
    );
  }

  const style = {
    backgroundImage: `url(${image.original})`,
    marginTop: "10px",
  };

  return (
    <div className="show-details">
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
          height: 600px;
          background-size: cover;
          width: 100%;
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
  try {
    const id = context.query.showId;
    const country = context.query.country;
    const response = await axios(
      `https://api.tvmaze.com/shows/${id}?embed=cast`
    );

    return { show: response.data, country };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
    };
  }
};

export default ShowDetails;
