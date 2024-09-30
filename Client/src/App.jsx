import {Routes, Route} from "react-router-dom"
import CreateUser from "./Component/CreateUser";
import MuseumData from "./Component/MuseumData";
import Login from "./Component/Login";
import Home from "./Component/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<CreateUser/>}></Route>
        <Route path="/MuseumData" element={<MuseumData/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </div>
  )
}
export default App;