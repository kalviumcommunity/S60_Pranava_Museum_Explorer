import {Routes, Route} from "react-router-dom"
import CreateUser from "./Component/CreateUser";
import MuseumData from "./Component/MuseumData";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<CreateUser/>}></Route>
        <Route path="/MuseumData" element={<MuseumData/>}></Route>
      </Routes>
    </div>
  )
}
export default App;