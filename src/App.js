import Home from './pages/home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} exact />
      </Routes>
    </div>
  )
}

export default App
