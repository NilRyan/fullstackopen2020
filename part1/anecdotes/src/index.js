import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const AnecdoteMostVotes = ({mostVotes, anecdotes, votes}) => {
  const maxVotes = Math.max(...votes);
  if(maxVotes === 0){
    return null;
  }
  return ( <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotes]}</p>
      <p> has {maxVotes} {maxVotes < 2 ? 'vote':'votes'}</p>
  </div> 
  )
  }

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setVotes] = useState(new Uint8Array(6));


  const generateRandom = () => {
    const random = (Math.random() * 4 | 0) + 1;
    setSelected(random);
  }
  const vote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setVotes(copy);
  }
  const mostVotes = points.indexOf(Math.max(...points));

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {`${props.anecdotes[selected]} ${points[selected]}`}
      <div>
        <button onClick = {vote}>vote</button>
        <button onClick = {generateRandom}>next anecdote</button>
      </div>
      <AnecdoteMostVotes mostVotes={mostVotes} anecdotes = {anecdotes} votes = {points} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)