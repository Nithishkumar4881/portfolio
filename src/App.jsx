import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Skills } from './components/Skills';

export const App = () => {
  const p = []
  return (
<>
<Router>
<Header />
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/skills' element={<Skills />} />
  <Route path='/about' element={<About />} />
  <Route path='/contact' element={<Contact />} />
</Routes>

</Router>
</>
  )
}
export default App;