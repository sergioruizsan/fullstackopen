import { useState } from "react"


const Button = ({clickHandler, text}) => (
  <button onClick={clickHandler}>{text}</button>
)

const StatisticLine = ({text, value}) => (
  <div>{text} {value}</div>
)

const Statistics = ({good, bad, neutral}) => {

  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = good / total * 100

  if(total === 0 ) return (<div>No feedback given</div>)

  return (
    <>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={total}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="positive" value={`${positive} %`}/>
    </>
  )

}


const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
    <div>
      <h1>Unicafe</h1>
      <h2>give feedback</h2>
      <Button clickHandler={() => setGood(good + 1)} text="good"/>
      <Button clickHandler={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button clickHandler={() => setBad(bad + 1)} text="bad"/>
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
    </>
  )
}

export default App