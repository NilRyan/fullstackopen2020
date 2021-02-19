import Part from './Part';

const Content = ({parts}) => {
  return (
    <div>
      {parts.map((part) => <Part part ={part.name} exercise = {part.exercise} /> )
    }
    </div>
  )
}

export default Content;
