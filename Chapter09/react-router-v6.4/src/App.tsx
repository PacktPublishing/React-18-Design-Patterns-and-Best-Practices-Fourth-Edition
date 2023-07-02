import { FC } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom'

import About from './components/About'
import Home from './components/Home'
import Pokemons, { dataLoader } from './components/Pokemons'
import Error404 from './components/Error404'
import './App.css'


const Root = () => (
  <>
    <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/pokemons">Pokemons</Link>
      </li>
    </ul>

    <div>
      <Outlet />
    </div>
  </>
)

const App: FC<any> = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pokemons" element={<Pokemons />} loader={dataLoader} />
        <Route path="*" element={<Error404 />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
