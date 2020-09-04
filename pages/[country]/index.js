import React, { useEffect } from "react";
import axios from "axios";

function Home(props) {
  console.log(props);
  return <div>This is a country test</div>;
}

getStaticProps = async () => {
  const response = await axios.get(
    "http://api.tvmaze.com/schedule?country=US&date=2014-12-01"
  );

  return {
    shows: response.data,
  };
};

export default Home;
