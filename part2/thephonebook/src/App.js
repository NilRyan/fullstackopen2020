import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterTerm, setFilterTerm] = useState('');
  const [filteredPersons, setFilteredPersons] = useState([]);

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const handleClick = (e) => {
    e.preventDefault();
    if(persons.some((person)=> person.name === newName)){
      alert(`${newName} is already added to the phonebook.`)
      setNewName('');
      return;
    }
    setPersons(persons.concat({name : newName, number : newNumber}));
    setNewName('');
    setNewNumber('');
  }
  const filter = (e) => {
    setFilterTerm(e.target.value);
    setFilteredPersons( persons.filter(
      (person) => person.name.toLowerCase()
              .indexOf(e.target.value.toLowerCase()) >= 0 ))
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value = {filterTerm} onChange = {filter}></input>
        </div>


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
      <h2>Numbers</h2>
      { filterTerm ? filteredPersons.map((person, index) => 
          <p key={`${person} ${index}`}>{person.name} {person.number}</p>
        ) :
        persons.map((person, index) => 
          <p key={`${person} ${index}`}>{person.name} {person.number}</p>
        )

      }
    </div>
  )
}

export default App