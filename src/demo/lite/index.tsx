import React, { useReducer, useState } from 'react'

interface ITodo {
  id: number
  value: string
}

interface IState {
  counter: number
  todos: ITodo[]
}

interface IContextProps {
  state: IState
  dispatch: any
}

const LiteTodoApp = () => {
  const initialState = {
    counter: 0,
    todos: [],
  }

  const ContextStore = React.createContext({} as IContextProps)

  const reducer = (
    currentState: IState,
    action: { type: string; value: string },
  ): IState => {
    switch (action.type) {
      case 'ADD_TODO': {
        const newCounter = currentState.counter + 1
        const newTodo = {
          id: newCounter,
          value: action.value,
        }
        return {
          counter: newCounter,
          todos: [...currentState.todos, newTodo],
        }
      }
      default:
        return currentState
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const AddTodo = () => {
    const { dispatch } = React.useContext(ContextStore)
    const add = (value: string) => dispatch({ type: 'ADD_TODO', value })
    const [text, setText] = useState('')
    return (
      <div>
        <input value={text} onChange={e => setText(e.target.value)} />
        <button
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

  const TodoList = () => {
    const { state } = React.useContext(ContextStore)
    const { todos } = state
    return (
      <div>
        {todos.map((todo: ITodo) => (
          <div key={todo.id}>{todo.value}</div>
        ))}
      </div>
    )
  }

  return (
    <ContextStore.Provider value={{ state, dispatch }}>
      <AddTodo />
      <TodoList />
    </ContextStore.Provider>
  )
}

export default LiteTodoApp
