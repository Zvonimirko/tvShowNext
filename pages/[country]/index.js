import axios from "axios";
import Thumbnail from "../../components/Thumbnail/Thumbnail";

function Home({ shows }) {
  console.log(shows);
  const renderShows = () => {
    return shows.map((showItem, index) => {
      const { show } = showItem;
      // id u showItemu je pongdje dupliciran
      return (
        <li key={index}>
          <Thumbnail imageUrl={show.image.medium} caption={show.name} />
          <style jsx>{`
            li {
              list-style: none;
            }
          `}</style>
        </li>
      );
    });
  };

  return <ul className="tvshows">{renderShows()}</ul>;
}

Home.getInitialProps = async (context) => {
  const country = context.query.country || "us";
  console.log("tcl:", context);
  const response = await axios.get(
    `http://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
  );

  return {
    shows: response.data,
  };
};

export default Home;
