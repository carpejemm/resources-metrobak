import { useReducer } from 'react'
import './App.css'

function App() {

  const reducerFunction = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
          return state.map(task => {
            if (task.id === action.id) {
              return { ...task, complete: !task.complete}
            } else {
              return task
            }
          })
      default:
        return task;
    }
  }

  const taskList = [
    {
      id: 1,
      title: "eat",
      complete: false
    },
    {
      id: 2,
      title: "code",
      complete: true
    },
    {
      id: 3,
      title: "sleep",
      complete: false
    },
  ]

    const[todos, dispatch] = useReducer(reducerFunction, taskList)

    console.log(todos)

    const handleCompleteTask = task => {
      dispatch({ type: "COMPLETE", id: task.id})
    }

  return (
    <>
      <h2>useReducer Hook</h2>

      {
        todos.map(task => (
          <div key={task.id}>
            <label>
              <input 
                type='checkbox'
                checked={task.complete}
                onChange={() => handleCompleteTask(task)}
              />
              {task.title}
            </label>
          </div>
        ))
      }
    </>
  )
}

export default App



// https://jsonplaceholder.typicode.com/users