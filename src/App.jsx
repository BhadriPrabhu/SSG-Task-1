import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './screens/home'
import { Navbar } from './screens/navbar'
import { About } from './screens/about'
import { Contact } from './screens/contact'

function App() {
  return (
        <Routes>
          <Route path='/' element={
            <>
              <Navbar/>
              <hr/>
              <Home/>
            </>
          }/>
          <Route path='/about' element={
            <>
              <Navbar/>
              <hr/>
              <About/>
            </>
          }/>
          <Route path='/contact' element={
            <>
              <Navbar/>
              <hr/>
              <Contact/>
            </>
          }/>

        </Routes>
  );
}

export default App;
