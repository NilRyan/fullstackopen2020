import axios from 'axios'
import {useState, useEffect} from 'react'
import DisplayCountries from './DisplayCountries'


const App = () =>  {
  const [countries, setCountries] = useState([]);
  const [filterTerm, setFilterTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);
  useEffect(()=> {
    axios
    .get('https://restcountries.eu/rest/v2/all')
    .then(response => setCountries(response.data));
  }, [])


  const filter = (e) => {
    setFilterTerm(e.target.value);
    setFilteredCountries( countries.filter(
      (country) => country.name.toLowerCase()
              .indexOf(e.target.value.toLowerCase()) >= 0 ))
  }
  
  
  return (
    <div className="App">
     find countries <input value = {filterTerm} onChange={filter}></input>
      <DisplayCountries filteredCountries = {filteredCountries} />
    </div>
  );
}

export default App;
