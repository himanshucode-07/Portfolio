import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  return (
    <>
    <nav className='flex gap-4'>
    <Link to="/">Home</Link>
    <Link to="/projects">Projects</Link>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/projects" element={<ProjectPage />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>

    <footer>
      <p>@2026 Himanshu</p>
    </footer>
    </>
  )
}

export default App
