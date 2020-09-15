import Router from "next/router";

export default function Home() {
  return <div>This is my Home page {process.browser}</div>;
}

Home.getInitialProps = (context) => {
  const country = context.query.countrs || "us";

  console.log("browser:", process.browser);
  process.browser
    ? Router.replace("/[country]", `${country}`)
    : context.res.writeHead(302, { Location: `/${country}` });

  context.res.end();

  return {
    test: "testing",
  };
};
