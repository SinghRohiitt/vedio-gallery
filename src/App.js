import { BrowserRouter as  Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from "./components/videos";
import Login from "./components/Login";
import Upload from "./components/Upload";
import Signup from "./components/Signup";


function App() {
  return (
  <Router>
    <Header/>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/videos' element={<Videos/>}/>
      <Route  path='/Upload' element={<Upload/>}/>
      <Route  path='/Login' element={<Login/>}/>
      <Route  path='/signup' element={<Signup/>}/>
    </Routes>
    <Footer/>
  </Router>
  );
}

export default App;
