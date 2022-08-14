
const Field = ({ text, value, changeHandler }) => (
    <div>
        <label htmlFor={text}>
            {`${text}: `}
        </label>
        <input
            id={text}
            value={value}
            onChange={changeHandler} />
    </div>
)

const Action = ({ value, changeHandler }) => (
    <div>
        <label htmlFor="add">Add</label>
        <input
            type="radio"
            name="action"
            value="add"
            checked={value === "add"} 
            onChange={changeHandler}
        />
        <label htmlFor="update">Update</label>
        <input
            type="radio"
            name="action"
            value="update"
            checked={value === "update"}
            onChange={changeHandler}
        />
    </div>
)

const PersonForm = ({
    onSubmitHandler,
    nameValue,
    nameChangeHandler,
    numberValue,
    numberChangeHandler,
    actionValue,
    actionChangeHandler,
}) => (
    <form onSubmit={onSubmitHandler}>
        <Field
            text="name"
            value={nameValue}
            changeHandler={nameChangeHandler} />
        <Field
            text="number"
            value={numberValue}
            changeHandler={numberChangeHandler} />
        <Action
            value={actionValue}
            changeHandler={actionChangeHandler}
        />
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
)

export default PersonForm