import { useState, useEffect } from "react";

export default function ArtMuseums() {
    const [museums, setMuseums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchArtMuseums() {
            console.log("Fetching museums...");

            const endpoint = "https://query.wikidata.org/sparql";
            const query = `
            SELECT ?museum ?museumLabel ?location ?image ?inception WHERE {
                ?museum wdt:P31 wd:Q132200.  # Art Museum type
                
                OPTIONAL { ?museum wdt:P18 ?image. }         # Image
                OPTIONAL { ?museum wdt:P571 ?inception. }    # Inception (founding year)
                OPTIONAL { ?museum wdt:P625 ?location. }     # Coordinates
            
                SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }
            LIMIT 20                      
            `;

            const url = `${endpoint}?query=${encodeURIComponent(query)}&format=json`;

            console.log("Query URL:", url);

            try {
                const response = await fetch(url, {
                    headers: { 'Accept': 'application/sparql-results+json' }
                });

                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

                const data = await response.json();
                console.log("API Response:", data);

                const museumsData = data.results.bindings.map(museum => ({
                    name: museum.museumLabel?.value || "Unknown",
                    image: museum.image?.value || null,
                    location: museum.location?.value || "No location data",
                    inception: museum.inception?.value?.split("T")[0] || "No data of opening"
                }));

                console.log("Parsed Museums Data:", museumsData);

                setMuseums(museumsData);
            } catch (error) {
                console.error("Fetch error:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchArtMuseums();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Art Museums</h1>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {museums.length === 0 && !loading && !error && <p>No museums found.</p>}
                {museums.map((museum, index) => (
                    <div key={index} className="border p-4 rounded-lg shadow-lg">
                        {museum.image && (
                            <img src={museum.image} alt={museum.name} className="w-full h-48 object-cover rounded-lg mb-2" />
                        )}
                        <h2 className="text-lg font-semibold">{museum.name}</h2>
                        <p><strong>Founded:</strong> {museum.inception}</p>
                        <p><strong>Location:</strong> {museum.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
