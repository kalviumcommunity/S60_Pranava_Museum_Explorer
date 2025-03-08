import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";

function MuseumData() {
    const navigate = useNavigate();

    return (
        <div 
            className="h-screen flex items-center justify-center relative"
        >
            
            {/* Background Image with Blur Effect */}
            <div 
                className="absolute inset-0 bg-cover bg-center filter blur-sm"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            ></div>
            
    
            {/* Overlay to slightly darken the background for better readability */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
            
    
            {/* Museum List */}
            <ul className="relative bg-white bg-opacity-80 p-8 rounded-xl shadow-xl space-y-4">
                {[
                    { name: "Art Museums", path: "/ArtMuseums", color: "bg-red-600 hover:bg-red-700" },
                    { name: "Archaeological Museums", path: "/ArchaeologicalMuseums", color: "bg-yellow-600 hover:bg-yellow-700"  },
                    { name: "Science & Technology Museums", path: "/ScienceMuseums", color: "bg-green-600 hover:bg-green-700" },
                    { name: "Natural History Museums", path: "/NaturalMuseums", color: "bg-blue-600 hover:bg-blue-700" },
                    { name: "Cultural Museums", path: "/CulturalMuseums", color: "bg-purple-600 hover:bg-purple-700" },
                    { name: "History Museums", path: "/HistoryMuseums", color: "bg-orange-600 hover:bg-orange-700" }
                ].map((museum, index) => (
                    <li key={index}>
                        <button 
                            onClick={() => navigate(museum.path)} 
                            className={`w-full text-white text-lg font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105 ${museum.color}`}
                        >
                            {museum.name}
                        </button>
                    </li>
                ))}
            </ul>
            <div className="absolute top-6 right-9">
    <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
    </div>
</div>

        </div>
    );
}

export default MuseumData;