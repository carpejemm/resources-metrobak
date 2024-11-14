import { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [todos, setTodos] = useState([])
  const [users, setUsers] = useState([])

  console.log(todos, "new list of todos")

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/users')

        console.log(response)

        const result = await response.json();

        // console.log("TODO LIST", result)

        if (!response.ok) {
          console.log('Error fetching data')
        }

        setTodos(result.data)

      } catch (error) {
        console.log(error.message)
        throw new Error
      }
    }

    fetchData()

  }, []);

  return (
    <>
      <h2>Fetch API</h2>
      {
        todos.map(todo => (
          <div key={todo.id}>
            <ul>
              <li>{todo.title}</li>
            </ul>
          </div>
        ))
      }
    </>
  )
}

export default App
