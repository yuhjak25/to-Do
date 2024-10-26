import { useState } from 'react'
import './App.css'

function App() {
  const [toDo, setNewToDo] = useState('')
  const [toDolist, setNewToDoList] = useState([
    {
      id: 10,
      content: 'Do something!',
      important: true,
    },
    {
      id: 1,
      content: 'Buy bread!',
      important: true,
    },
    {
      id: 2,
      content: 'Do a sandwich!',
      important: false,
    },
  ])
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const toDoObject = {
      id: toDolist.length + 1,
      content: toDo,
      important: false,
    }

    setNewToDoList([...toDolist, toDoObject])
    setNewToDo('')
  }

  const changeImportance = (id) => {
    const updatedList = toDolist.map((toDo) => {
      if (toDo.id === id) {
        return { ...toDo, important: !toDo.important }
      }
      return toDo
    })

    setNewToDoList(updatedList)
  }

  const filterTerm = () => {
    return toDolist.filter((toDoItem) =>
      toDoItem.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  return (
    <>
      <h1>Hello World!</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="🔍 Search for toDo."
      />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={toDo}
          onChange={(e) => setNewToDo(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>

      {/* Show submits */}
      {filterTerm().map((toDo) => {
        return (
          <li key={toDo.id}>
            {toDo.content}{' '}
            <button onClick={() => changeImportance(toDo.id)}>
              Importance: {toDo.important ? 'High' : 'Low'}
            </button>
          </li>
        )
      })}
    </>
  )
}

export default App
