// import Home from './pages/home'
import { Routes, Route } from 'react-router-dom'
import Hooks from './Materi/Hooks'
import NewsHook from './Materi/NewsHook'
// import Lifecycle from './Materi/Lifecycle'
// import Form from './Materi/Form'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<NewsHook />} exact />
      </Routes>
    </div>
  )
}

export default App
