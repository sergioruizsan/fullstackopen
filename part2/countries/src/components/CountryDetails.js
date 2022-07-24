import axios from "axios"
import { useState, useEffect } from "react"

const API_KEY = process.env.REACT_APP_API_KEY

const Weather = ({ weather }) => (
    <div>
        <div>temperature - {weather.main.temp} Celsius</div>
        <img src={`${weather.weather.icon}`} alt={weather.weather.description}></img>
        <div>{`wind ${weather.wind.speed} m/s`}</div>
    </div>
)

const Flag = ({country}) => (
    <img src={country.flags.png} alt={`${country.name} flag`}></img>
)

const Language = ({ language }) => (
    <li>{language}</li>
)

const Languages = ({ languages }) => (
    <ul>
        {Object.entries(languages).map(([key, language]) => (
            <Language key={key} language={language} />
        ))}
    </ul>
)

const CountryDetails = ({ country }) => {

    const [latitude, longitude] = country.latlng
    const [weather, setWeather] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        axios
            .get('https://api.openweathermap.org/data/2.5/weather',
                {
                    params:
                    {
                        lat: latitude,
                        lon: longitude,
                        units: 'metric', //celsius and meter/sec
                        appid: API_KEY
                    }
                })
            .then(response => {
                let data = response.data
                const iconId = data.weather[0].icon
                const icon = `http://openweathermap.org/img/wn/${iconId}@2x.png`
                data = {
                    ...data,
                    weather: {
                        ...data.weather[0],
                        icon
                    }
                }
                setWeather(data)
                setIsLoading(false)
            })
    }, [latitude, longitude])

    return (
        <div>
            <h1>{country.name.common}</h1>
            <div>capital {country.capital[0]}</div>
            <div>area {country.area}</div>
            <h2>languages</h2>
            <Languages languages={country.languages} />
            <Flag country={country}></Flag>
            <h2>Weather in {country.name.common}</h2>
            {!isLoading && <Weather weather={weather} />}
        </div>
    )
}

export default CountryDetails