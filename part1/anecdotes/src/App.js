import { useState } from 'react'


const Header = ({title}) => (
  <h2>{title}</h2>
)

const Button = ({clickHandler, text}) => (
  <button onClick={clickHandler}>{text}</button>
)

const Anecdote = ({anecdote, votes}) => (
  <>
    <div>{anecdote}</div>
    <div>has {votes} votes</div>
  </>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [mostVoted, setMostVoted] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const voteAnecdote = () => {
    const newVotes = [...votes]
    newVotes[selected]+=1
    setVotes(newVotes)

    const highestVotes = [...newVotes]
    const highest = highestVotes.sort((a,b) => b-a)[0]
    const highestIdx = newVotes.indexOf(highest)
    setMostVoted(highestIdx)

  }

  const getAnecdote = () => {
    const randomIndex = Math.floor(Math.random() * (anecdotes.length) )
    setSelected(randomIndex)
  }

  return (
    <div>
      <Header title="Anecdote of the day"/>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]} />
      <Button clickHandler={voteAnecdote} text="vote"/>
      <Button clickHandler={getAnecdote} text="next anecdote"/>
      <Header title="Anecdote with most votes"/>
      <Anecdote anecdote={anecdotes[mostVoted]} votes={votes[mostVoted]} />
    </div>
  )
}

export default App