import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Componentes/Paginas/Navbar'
import Home from './Componentes/Paginas/Inicio'
import Hobbies from './Componentes/Paginas/Pasatiempo'
import Formacion from './Componentes/Paginas/Formacion'



function App() {
  return (
    <div className="App">

    <Router>
      <Navbar/>
      <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/Pasatiempo' exact element={<Hobbies/>}/>
      <Route path='/Formacion' exact element={<Formacion/>}/>

      </Routes>
    
    </Router>    



    </div>
  );
}

export default App;
