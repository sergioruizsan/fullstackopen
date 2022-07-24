const Filter = ({ value, onFilterHandler }) => (
    <div>
        <label htmlFor="country-filter">
            {`find countries `}
        </label>
        <input
         id="country-filter" 
         value={value} 
         onChange={onFilterHandler}/>
    </div>
)

export default Filter