import Thumbnail from "../Thumbnail/Thumbnail";

function Cast({ cast }) {
  console.log(cast);
  const renderCast = () => {
    return cast.map((item, index) => {
      const { image, name } = item.person;
      return (
        <li className="cast__list__person" key={index}>
          <h4>{name}</h4>
          <img
            src={
              image
                ? image.medium
                : "https://via.placeholder.com/210x295?text=no_image_available"
            }
          />
        </li>
      );
    });
  };

  return (
    <div className="cast">
      <h3>Cast</h3>
      <ul className="cast__list">{renderCast()}</ul>
      <style jsx>{`
        .cast__list {
          list-style: none;
          display: flex;
          overflow-x: auto;
        }

        ::-webkit-scrollbar {
          display: none;
        }

        .cast__list > :global(.cast__list__person) {
          margin-right: 10px;
        }
         {
          margin: 10px;
        }
      `}</style>
    </div>
  );
}

export default Cast;
