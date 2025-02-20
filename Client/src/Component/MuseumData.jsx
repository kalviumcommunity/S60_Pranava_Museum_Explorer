import { useNavigate } from "react-router-dom";

function MuseumData () {

    const Navigate = useNavigate()

    return(
        <div>
            <ul>
                <li><button onClick={() =>(Navigate('/ArtMuseums'))} className="border-black border-2">Art Museums</button></li>
                <li><button onClick={() =>(Navigate('/ArchaeologicalMuseums'))} className="border-black border-2">Archaeological Museums</button></li>
                <li><button onClick={() =>(Navigate('/ScienceMuseums'))} className="border-black border-2">Science & Technology Museums</button></li>
                <li><button onClick={() =>(Navigate('/NaturalMuseums'))} className="border-black border-2">Natural History Museums</button></li>
                <li><button onClick={() =>(Navigate('/CulturalMuseums'))} className="border-black border-2">Cultural Museums</button></li>
                <li><button onClick={() =>(Navigate('/HistoryMuseums'))} className="border-black border-2"> History Museums</button></li>
            </ul>
        </div>
    )


}

export default MuseumData;