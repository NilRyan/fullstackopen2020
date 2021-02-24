const addedStyle = {
  color: 'green',
  background: 'lightgrey',
  fontSize: '20px',
  borderStyle: 'solid',
  borderRadius: '5px',
  padding: '10px',
  marginBottom: '10px',
}
const errorStyle = {
  color: 'red',
  background: 'lightgrey',
  fontSize: '20px',
  borderStyle: 'solid',
  borderRadius: '5px',
  padding: '10px',
  marginBottom: '10px',
}
const AddedNotif = ({message}) => {
  if(message === null){
    return null;
  } else {
    return (
      <div style = {addedStyle}>
        {message}
      </div>
    )
  }
  
}

const ErrorNotif = ({message}) => {
  if(message === null){
    return null;
  } else {
    return (
      <div style = {errorStyle}>
        {message}
      </div>
    )
  }
  
}


export {AddedNotif, ErrorNotif}
