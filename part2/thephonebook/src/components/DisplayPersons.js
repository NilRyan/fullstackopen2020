const DisplayPersons = ({filterTerm, filteredPersons, persons, handleDelete}) => {
  return (
    <div>
       {filterTerm ? filteredPersons.map((person, index) => 
          <p key={`${person} ${index}`}>{person.name} {person.number} <button onClick = {() => handleDelete(person.id, person.name, person.number)}>delete</button></p>
        ) :
        persons.map((person, index) => 
          <p key={`${person} ${index}`}>{person.name} {person.number} <button onClick = {() => handleDelete(person.id, person.name, person.number)}>delete</button></p>
        )
       }
    </div>
  )
}

export default DisplayPersons
