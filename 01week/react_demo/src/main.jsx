import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const name = "Tuomas Kohvakka";
const first_page = 2002;

const Demo = () => { // This is a component
  return (
  <div>
    <h1>Hello, my name is {name}</h1>
    <p>I have {2024 - first_page} years of experience building websites.</p>
    <Box name="Jeeves" title="CEO" age="77"/>
    <Box name="Hannah" title="CTO" age="34" />
    <Box name="Steven" title="UFO" age="65" />
  </div>
  )
}

const Box = (props) => { // Must use term "props"
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Title: {props.title}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
)
