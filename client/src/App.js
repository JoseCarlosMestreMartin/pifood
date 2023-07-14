import "./App.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Home from "./Components/Home/home";
import Form from "./Components/Form/Form";
import Detail from "./Components/Detail/Detail";

function App() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home"  element={<Home/>}/>
        <Route path="/create" element={<Form/>}/>
        <Route path="/detail" element={<Detail/>}/>
    </Routes>
    
  );
}

export default App;
