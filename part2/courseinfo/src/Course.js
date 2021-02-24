const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const sum = course.parts.reduce(((total, current) => total + current.exercises), 0)
  return(
    <p style ={ {fontWeight: 'bold'} }>total of {sum} exercises</p>
  ) 
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      { course.parts.map((part) => <Part key={part.id} part={part}/>) }
      <Total course ={course} />
    </div>
  )
}
const Course = ({course}) => {
  return (
    <div>
      <Header course = {course} />
      <Content course = {course}/>
    </div>
  )
}

export default Course
