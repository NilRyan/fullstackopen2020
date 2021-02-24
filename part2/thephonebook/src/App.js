import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import AddPerson from './components/AddPerson'
import DisplayPerson from './components/DisplayPersons'
import peopleServices from './services/people'
import {AddedNotif, ErrorNotif} from './components/Notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterTerm, setFilterTerm] = useState('');
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  
  useEffect(()=> {
    peopleServices
      .getAll()
      .then(personData => setPersons(personData));
  }, [])
  
  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }
  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }
  const handleDelete = (id, name, number) => {
    if(window.confirm(`Delete ${name} ${number}`)){
      setPersons(persons.filter((person) => person.id !== id))
   
      peopleServices
        .removePerson(id)
        
    }
  }
 
  const handleClick = (e) => {
    e.preventDefault();
    if(persons.some((person)=> person.name === newName)){
      if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one.`)){
        const person = persons.find(person => person.name === newName)
        const {id} = person;

        peopleServices
          .updateNumber(id, {...person, number : newNumber})
          .then((updatedData) => setPersons([...persons, updatedData ]))
          .catch(() => {
            setErrorMessage(`Information of ${newName} has already been removed from the server`);
            setTimeout(() => {
              setErrorMessage(null);
            }, 3000)
          })
        setNewName('');
        setNewNumber('');
      
      }
      
      return;
    } else if (newName && newNumber){
      const newPerson = {
        name : newName,
        number : newNumber,
      }
      peopleServices
        .addPerson(newPerson)
        .then(personAdded => {
          setPersons([...persons, personAdded])
          setMessage(`Added ${newPerson.name}`)
          setTimeout(()=> {
            setMessage(null)
          }, 3000)
        })
      setNewName('');
      setNewNumber('');

    }
    
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
      <AddedNotif message = {message} />
      <ErrorNotif message = {errorMessage} />
      <Filter filterTerm ={filterTerm} filter={filter} />
      <AddPerson
        newName = {newName}
        handleNameChange = {handleNameChange} 
        newNumber = {newNumber}
        handleNumberChange = {handleNumberChange}
        handleClick = {handleClick}
      />

      <h2>Numbers</h2>
      <DisplayPerson
        handleDelete = {handleDelete}
        filterTerm = {filterTerm}
        filteredPersons = {filteredPersons}
        persons = {persons}
      />
      
    </div>
  )
}

export default App