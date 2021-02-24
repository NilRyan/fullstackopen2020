import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
}

const addPerson = (newPerson) => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data);
}

const removePerson = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data);
  
}
const updateNumber = (id, newData) => {
  const request = axios.put(`${baseUrl}/${id}`, newData )
  return request.then(response => response.data);
}
const peopleServices = {getAll, addPerson, removePerson, updateNumber}



export default peopleServices;
