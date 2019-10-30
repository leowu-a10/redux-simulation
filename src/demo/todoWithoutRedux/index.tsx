import React, { useReducer, useState } from 'react'

const Todo = ({ todo, remove, edit }: any) => {
  const [mode, setMode] = useState('list')
  const [text, setText] = useState(todo.text)
  return (
    <div className="Todo">
      {mode === 'list' ? (
        <>
          <span className="TodoText">{todo.text}</span>
          <button className="RemoveTodo" onClick={remove}>
            Remove
          </button>
          <button className="EditTodo" onClick={() => setMode('edit')}>
            Edit
          </button>
        </>
      ) : (
        <>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            className="EditTodoInput"
          />
          <button
            className="EditTodoSave"
            onClick={() => {
              edit(text)
              setMode('list')
            }}
          >
            Save
          </button>
          <button className="EditTodoCancel" onClick={() => setMode('list')}>
            Cancel
          </button>
        </>
      )}
    </div>
  )
}

const AddTodo = ({ add }: any) => {
  const [text, setText] = useState('')
  return (
    <div className="AddTodo">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        className="AddTodoInput"
      />
      <button
        className="AddTodoButton"
        onClick={() => {
          add(text)
          setText('')
        }}
      >
        Add
      </button>
    </div>
  )
}

const TodoApp = () => {
  const initialState = {
    counter: 0,
    todos: [],
  }

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case 'add': {
        const newCounter = state.counter + 1
        const newTodo = {
          id: newCounter,
          text: action.text,
        }
        return {
          counter: newCounter,
          todos: [...state.todos, newTodo],
        }
      }
      case 'edit': {
        const idx = state.todos.findIndex((t: any) => t.id === action.id)
        const todo = Object.assign({}, state.todos[idx])
        todo.text = action.text
        const todos = Object.assign([], state.todos)
        todos.splice(idx, 1, todo)
        return {
          counter: state.counter,
          todos,
        }
      }
      case 'remove': {
        const idx = state.todos.findIndex((t: any) => t.id === action.id)
        const todos = Object.assign([], state.todos)
        todos.splice(idx, 1)
        return {
          counter: state.counter,
          todos,
        }
      }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <AddTodo add={(text: any) => dispatch({ type: 'add', text })} />
      {state.todos.map((t: any) => (
        <Todo
          key={t.id}
          todo={t}
          remove={() => dispatch({ type: 'remove', id: t.id })}
          edit={(text: any) => dispatch({ type: 'edit', id: t.id, text })}
        />
      ))}
    </div>
  )
}

export default TodoApp
