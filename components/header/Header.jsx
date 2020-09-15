import { useRouter } from "next/router";
import { useState } from "react";

const countries = [
  {
    label: "us",
    name: "United States",
  },
  {
    label: "br",
    name: "Brazil",
  },
  {
    label: "gb",
    name: "Great Britain",
  },
  {
    label: "ru",
    name: "Russia",
  },
];

function Header() {
  const router = useRouter();
  console.log(router);
  const [selectedCountry, setSelectedCountry] = useState(router.query.country);

  const handleChange = (e) => {
    setSelectedCountry(e.target.value);
    router.push(`/${e.target.value}`);
  };

  const renderCountries = () => {
    return countries.map((country) => {
      return (
        <option key={country.label} value={country.label}>
          {country.name}
        </option>
      );
    });
  };

  return (
    <div className="header">
      <select
        value={selectedCountry}
        className="header__select"
        onChange={handleChange}
      >
        {renderCountries()}
      </select>

      <style jsx>{`
         {
          background-color: #333;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 40px;
          position: relative;

          .header__select {
            height: 30px;
            border: none;
            outline: none;
          }
        }
      `}</style>
    </div>
  );
}

export default Header;
