import './App.css';
import Navbar from './components/ui/Navbar';
import AgeCalculator from './views/AgeCalculator';
import BoredApp from './views/BoredApp';
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
    <Route path='/parapluie'  element={<ParapluieApp/>}/>
    <Route path='/passwordGenerator'  element={<PasswordGenerator/>}/>
    <Route path="*" element={<PageNotFound />} />
    </Routes>
    </>  
  )
}

export default App
