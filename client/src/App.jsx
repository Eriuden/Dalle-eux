import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { CreatePost } from './pages/CreatePost'

import './App.css'

function App() {

  return (
    <>
      <div className='app'>

      <header className='w-full flex justify-between items-center'>
          <Link to={"/"}>Acceuil</Link>  
          <Link to={"/createPost"}><button>Créer</button></Link> 
      </header>

      <main>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/createPost' element={<CreatePost/>}/>
        </Routes>
      </main>
        
      </div>
      
      
    </>
  )
}

export default App
