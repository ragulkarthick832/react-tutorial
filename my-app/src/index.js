import React from 'react'
import ReactDOM from 'react-dom/client'
// modules
function Greeting() {
  return <h2>welcome to the first component</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
