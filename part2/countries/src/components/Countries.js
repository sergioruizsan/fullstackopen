const Country = ({ name, onShowHandler}) => (
    <li>
        {`${name}` }
        <button onClick={onShowHandler}>show</button>
    </li>
)

const Countries = ({countries, onShowHandler}) => {

    return (
        <ul>
        {countries.map(country => (
            <Country 
                key={country.cca2} 
                name={country.name.common} 
                onShowHandler={()=> onShowHandler(country)} 
            />
        ))}
        </ul>
    )
}

export default Countries