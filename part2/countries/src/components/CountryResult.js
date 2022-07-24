import CountryDetails from './CountryDetails'
import Countries from './Countries'

const CountryResult = ({ countries, onShowHandler }) => {

    if (countries.length === 1) {
        return (<CountryDetails country={countries[0]} />)
    }
    if (countries.length > 1 && countries.length <= 10) {
        return (<Countries countries={countries} onShowHandler={onShowHandler} />)
    }
    if (countries.length > 10) {
        return (<div>Too many matches, specify another filter</div>)
    }
}

export default CountryResult