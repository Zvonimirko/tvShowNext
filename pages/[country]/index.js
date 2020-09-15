import axios from "axios";

import Thumbnail from "../../components/Thumbnail/Thumbnail";
import CustomError from "../_error";

function Home({ shows, country, statusCode }) {
  if (statusCode) {
    return <CustomError statusCode={statusCode} />;
  }

  const renderShows = () => {
    return shows.map((showItem, index) => {
      const { show } = showItem;
      // id u showItemu je pongdje dupliciran
      return (
        <li key={index}>
          <Thumbnail
            href="/[country]/[showId]"
            as={`/${country}/${showItem.show.id}`}
            imageUrl={
              show.image
                ? show.image.medium
                : "https://via.placeholder.com/210x295?text=no_image_available"
            }
            caption={show.name}
          />
        </li>
      );
    });
  };

  return (
    <div className="Home">
      <ul className="tvshows">
        {renderShows()}
        <style jsx>
          {`
            ul {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              padding: 0;
              list-style: none;
              gap: 10px;
            }
          `}
        </style>
      </ul>
    </div>
  );
}

Home.getInitialProps = async (context) => {
  try {
    const country = context.query.country || "us";
    const response = await axios.get(
      `https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
    );

    return {
      shows: response.data,
      country,
    };
  } catch (error) {
    return {
      statusCode: error.response ? error.response.status : 500,
    };
  }
};

export default Home;
