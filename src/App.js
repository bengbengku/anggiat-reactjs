// import Home from './pages/home'
import { Routes, Route } from 'react-router-dom'
// import NewsHook from './Materi/NewsHook'
// import Redux from './Materi/Redux'
// import About from './Materi/Routing/About'
// import Profile from './Materi/Routing/Profile'
import Lifecycle from './Materi/Lifecycle'
// import Form from './Materi/Form'

function App() {
  return (
    <div>
      <Routes>
        {/* <Route path='/' element={<Redux />} exact /> */}
        {/* <Route path='/about' element={<About />} exact />
        <Route path='/profile' element={<Profile />} exact /> */}
        <Route path='/' element={<Lifecycle />} exact />
      </Routes>
    </div>
  )
}

export default App
