import { Fragment } from 'react'
import GlobalStyle from './utils/styles/GlobalStyle'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/'
import Employees from './pages/Employees/'
import Error from './pages/Error/'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="employees" element={<Employees />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Fragment>
  )
}

export default App
