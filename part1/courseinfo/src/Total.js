const Total = ({exercises}) => {
  return (
   
      <p>
        Number of exercises {exercises.reduce(
          ((accumulator, current) => { return accumulator + current.exercises}),0)
          
        }</p>
  )
}

export default Total
