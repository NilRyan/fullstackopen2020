/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

const DisplayCountries = ({ filteredCountries }) => {
  const [active, setActive] = useState([]);
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    setActive(filteredCountries.map((country, index) => {
      return { show: false };
    }))

    return () => setActive([]);
  }, [filteredCountries])


  useEffect(() => {
    if (filteredCountries.length === 1) {
      const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${filteredCountries[0].capital}`;
      axios.get(url)
        .then(response => {setWeatherData(response.data)
        setIsLoading(false)
      }
        );
    }
    
  }, [filteredCountries])


  if (filteredCountries.length > 10) {
    return <p>Too many matches, specify another filter</p>;
  }

  else if (filteredCountries.length === 1 && !isLoading) {
    return <div>
      {
        filteredCountries.map((country) => {
          return (
            <div key={country.name}>
              <h1>{country.name}</h1>
              <p>capital {country.capital}</p>
              <p>population {country.population}</p>
              <ul>
                <h2>languages</h2>
                {country.languages.map((lang, index) =>
                  <li key={`${lang.name}${index}`}>{lang.name}</li>
                )}
              </ul>
              <img style={{ width: "200px" }} src={country.flag} alt="flag" />
            </div>) })
      }

              <div>
              <h2>Weather in {weatherData.location.name}</h2>
              <p>temperature {weatherData.current.temperature} Celcius </p>
              <img src={weatherData.current.weather_icons[0]} alt='weather-icon' />
              <p>wind {weatherData.current.wind_speed} mph </p>
              <p>wind direction {weatherData.current.wind_dir} mph </p>
            </div> 
    </div>
  }

  else {
    return (

      <div>
        {
          filteredCountries.map((country, index) =>
          (<div key={country.numericCode}>
            {country.name}
            <button onClick={(e) => {
              const newActive = [...active];
              newActive[index].show = !active[index].show
              setActive(newActive);
            }


            }>show</button>
            {
              active[index]?.show ?
                <div key={country.name}>
                  <h1>{country.name}</h1>
                  <p>capital {country.capital}</p>
                  <p>population {country.population}</p>
                  <ul>
                    <h2>languages</h2>
                    {country.languages.map((lang, index) =>
                      <li key={`${lang.name}${index}`}>{lang.name}</li>
                    )}
                  </ul>
                  <img style={{ width: "200px" }} src={country.flag} alt="flag" />
                </div>
                : null

            }
          </div>

          )
          )

        }
      </div>
    )
  }
}

export default DisplayCountries
