import React from 'react'
import './App.css'
import routes from './routes'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      {routes}
    </div>
  )
}

export default App
