function CustomError({ statusCode }) {
  return (
    <div>
      <h1>Ooops! There was an error!!! | {statusCode}</h1>
      <img
        src="https://i.insider.com/593af232bf76bb72038b4c7a?width=1800&format=jpeg&auto=webp"
        alt="error"
      />
      <style jsx>{`
        text-align: center;

        img {
          width: 100%;
          height: 645px;
        }
      `}</style>
    </div>
  );
}

CustomError.getInitialProps = ({ err, res }) => ({
  statusCode: res ? res.statusCode : err ? err.statusCode : 404,
});

export default CustomError;
