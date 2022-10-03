// import Home from './pages/home'
import { Routes, Route } from 'react-router-dom'
import Form from './Materi/Form'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Form />} exact />
      </Routes>
    </div>
  )
}

export default App
