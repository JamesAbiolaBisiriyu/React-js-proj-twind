
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';

function App() {
  const [isMenoOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);


  return (
   <div>
   <Navbar /> 
  

   </div>
  );
}

export default App
