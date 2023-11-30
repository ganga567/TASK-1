import Signin from './components/signin'
import Signup from './components/signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dash from './components/dashboard';
import React,{createContext, useState} from 'react';

export const Store = createContext()

function App() {
  const [login,setlogin] = useState(false)
  const [Dashname,setDashname] = useState("")
  return (
  <div >
    <BrowserRouter>
      <Store.Provider value={{ login, setlogin, Dashname, setDashname }}>
      <Routes>
        <Route path='/' element={<Signin/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dash/>} /> 
      
      </Routes>
      </Store.Provider>
    </BrowserRouter>
  </div>
  );
}

export default App;

