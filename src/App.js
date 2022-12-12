import React,{useContext,useEffect} from 'react'
import './App.css';
import Home from './Components/Home';
import { useGlobalContext } from './Warehouse/context';
const App = () => {

  return (
    <div>
      <Home/>
    </div>
  )
}

export default App;