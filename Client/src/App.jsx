import {Routes, Route} from "react-router-dom"
import CreateUser from "./Component/CreateUser";
import MuseumData from "./Component/MuseumData";
import Login from "./Component/Login";
import Home from "./Component/Home";
import ArtMuseums from "./MuseumTypes/ArtMuseums";
import ArchaeologicalMuseums from "./MuseumTypes/ArchaeologicalMuseums";
import CulturalMuseums from "./MuseumTypes/CulturalMuseums";
import HistoryMuseums from "./MuseumTypes/HistoryMuseums";
import NaturalMuseums from "./MuseumTypes/NaturalHistoryMuseums";
import ScienceMuseums from "./MuseumTypes/Science&TechnologyMuseums";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<CreateUser/>}></Route>
        <Route path="/MuseumData" element={<MuseumData/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/ArtMuseums" element={<ArtMuseums/>}></Route>
        <Route path="/ArchaeologicalMuseums" element={<ArchaeologicalMuseums/>}></Route>
        <Route path="/CulturalMuseums" element={<CulturalMuseums/>}></Route>
        <Route path="/HistoryMuseums" element={<HistoryMuseums/>}></Route>
        <Route path="/NaturalMuseums" element={<NaturalMuseums/>}></Route>
        <Route path="/ScienceMuseums" element={<ScienceMuseums/>}></Route>

      </Routes>
    </div>
  )
}
export default App;