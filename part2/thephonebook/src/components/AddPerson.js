const AddPerson = ({newName, handleNameChange, newNumber, handleNumberChange, handleClick}) => {
  return (
    <form>
      <h1>add a new</h1>
      <div>
        name: <input value={newName} onChange={handleNameChange} />
      </div>
      <div>
        number: <input value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button  onClick = {handleClick} type="submit">add</button>
      </div>
  </form>
  )
}

export default AddPerson
