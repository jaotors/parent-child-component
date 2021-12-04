import React, { useState } from 'react'

const Child = ({ counter, onSet }) => {
  const [childCounter, setChildCounter] = useState(counter)

  return (
    <div>
      child component
      <div>
        parent counter on child {counter}{' '}
        <button onClick={() => onSet((state) => ++state)}>
          click parent on child
        </button>
      </div>
      <div>
        child counter: {childCounter}{' '}
        <button
          onClick={() => {
            setChildCounter((state) => ++state)
          }}
        >
          click child
        </button>
      </div>
    </div>
  )
}

const Parent = () => {
  const [parentCounter, setParentCounter] = useState(1)

  return (
    <>
      <div>
        <div>parent component</div>
        parent counter: {parentCounter}{' '}
        <button
          onClick={() => {
            setParentCounter((state) => ++state)
          }}
        >
          click parent
        </button>
      </div>
      <br />
      <br />
      <br />
      <Child counter={parentCounter} onSet={setParentCounter} />
    </>
  )
}

export default Parent
