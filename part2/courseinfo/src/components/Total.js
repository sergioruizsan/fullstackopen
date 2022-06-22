const sum = (accumulated, current) => accumulated = accumulated + current

const Total = ({ parts }) => {
    const total = parts.map(part => part.exercises).reduce(sum)
    return (
        <p><b>total of {total} exercises</b></p>
    )
}

export default Total