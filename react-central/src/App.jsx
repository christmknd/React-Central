import './App.css';
import Navbar from './components/ui/Navbar';
import AgeCalculator from './views/AgeCalculator';
import BoredApp from './views/BoredApp';
import HauteCouture from './views/HauteCoutureApp';
import Home from "./views/Home";
import PageNotFound from './views/PageNotFound';
import ParapluieApp from "./views/ParapluieApp";
import PasswordGenerator from "./views/PasswordGenerator"
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
    <Route path ="/" element={< Home/>} />
    <Route path='/ageCalc' element={< AgeCalculator/>}/>
    <Route path='/bored' element={<BoredApp/>}/>
    <Route path='/hauteCouture' element={<HauteCouture/>}/>
    <Route path='/parapluie'  element={<ParapluieApp/>}/>
    <Route path='/passwordGenerator'  element={<PasswordGenerator/>}/>
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>  
  )
}

export default App
