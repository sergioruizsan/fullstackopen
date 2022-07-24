import { useEffect, useState } from "react";
import axios from 'axios';

import Filter from './components/Filter'
import CountryResult from './components/CountryResult'

const sanitize = (value) => value.toLowerCase()

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const onFilterHandler = (event) => {
    const filter = event.target.value
    setFilter(filter) 

    const filteredCountries = countries.filter((country) => (
      sanitize(country.name.common).includes(sanitize(filter))
    ))
    setFilteredCountries(filteredCountries) 
  }

  const onShowHandler = (country) => setFilteredCountries([country])

  return (
    <>
      <Filter value={filter} onFilterHandler={onFilterHandler}></Filter>
      <CountryResult countries={filteredCountries} onShowHandler={onShowHandler}/>
    </>
  );
}

export default App;
