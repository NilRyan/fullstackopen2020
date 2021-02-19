import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Statistic = ({value, text}) => {
  return (
    <>
    <tr>
    <td>{text} </td>
    <td>{value}</td>
    </tr>
    </>
  )
}

const Statistics = ({good, neutral, bad, total, average, positive}) => {
  if (good || neutral || bad){
    return (
    <div>
      <h1>statistics</h1>
        <table>
          <tbody>
            <Statistic text="good" value ={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={total} />
            <Statistic text ="average" value={average || `0`} />
            <Statistic text ="positive" value={`${positive}%`} />
          </tbody>
       </table>
    </div>
   
    )
  }
  return(
    <h1>
      No feedback given
    </h1>
  )
}

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
  }
  const total =  good + neutral + bad;
  const average = (good*1 + neutral*0 + bad*(-1))/total;
  const positive = good / total * 100 ;
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick ={handleGood} text="good"/>
      <Button onClick ={handleNeutral} text="neutral" />
      <Button onClick ={handleBad} text="bad" />

      <Statistics
          good ={good}
          neutral = {neutral}
          bad = {bad}
          total = {total}
          average = {average}
          positive = {positive}
      />
      
    </div>
  )
}

export default App;

