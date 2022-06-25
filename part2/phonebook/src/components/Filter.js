const Filter = ({ value, onChangeHandler }) => (
    <div>
        <label for="person-filter">
        {`filter shown with `}
        </label>
        <input
            id="person-filter"
            value={value}
            onChange={onChangeHandler} />
    </div>
)

export default Filter