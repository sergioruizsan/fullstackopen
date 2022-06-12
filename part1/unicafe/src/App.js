import { useState } from "react"

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total * 100

  return (
    <>
    <div>
      <h1>Unicafe</h1>
      <h2>give feedback</h2>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h2>statistics</h2>
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {total}</div>
      <div>average {Number.isNaN(average) ? 0 : average}</div>
      <div>positive {Number.isNaN(positive) ? 0 : positive} %</div>
    </div>
    </>
  )
}

export default App