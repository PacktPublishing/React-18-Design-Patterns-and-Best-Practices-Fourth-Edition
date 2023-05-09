import { FC } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const App: FC<any> = ({ children }) => (
  <div className="App">
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>

    {children}
  </div>
)

export default App
