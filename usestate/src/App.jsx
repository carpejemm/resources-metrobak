import { useState } from 'react'
import './App.css'

const App = () => {
  const [count, setCount] = useState(22);
  const [firstName, setFirstname] = useState('Jem')
  const [lastName, setLastName] = useState('Laguda')

  const userName = 'Karen';

  const hasName = true;

  const anon = false;


  // let count = 0;

  // const setCount = number => {
  //   count = number
  // }

  const handleCounter = () => {
    setCount(count + 11)
  }

  const handleChangeName = () => {
    setFirstname('Laguda')
  }

  const handleFirstNameChange = e => {
    console.log(e.target.value);
    setFirstname(e.target.value)
  }

  const handleLastNameChange = e => {
    console.log(e.target.value)
    setLastName(e.target.value)
  }

  return (
    <>
      <h2>useState</h2>
      <button onClick={handleCounter}>Counter: {count}</button>
      <br />
      <br />
      <br />
      <div>Change First Name: {firstName}</div>
      <button onClick={handleChangeName}>Click here to change the first name</button>

      <h2>Data Binding</h2>
      <h3>First Name: {firstName}</h3>
      <h3>Last Name: {lastName}</h3>
      <label>First Name: </label>
      <input 
        type="text"
        placeholder='Enter your Name'
        // value={firstName}
        onChange={(e) => handleFirstNameChange(e)}
      />
      <br />
      <label>Last Name: </label>
      <input 
        type="text"
        placeholder='Enter your Last Name'
        // value={lastName}
        onChange={(e) => handleLastNameChange(e)}
      />

      <h2>Conditionals</h2>
      { userName ?? 'string' }  
      
      <h3>{hasName && 'Kevin'}</h3>
      <h3>{userName && 'Karen'}</h3>

      <h3>{anon ? 'Anon' : userName}</h3>
    </>
  )
}

export default App;
