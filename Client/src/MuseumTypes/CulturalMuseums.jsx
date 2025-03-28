import { useEffect, useState } from "react"


export default function CulturalMuseums(){
    const [museums, setMuseums] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error , setError] = useState(null);

    useEffect(() =>{
        async function fetchCulturalMuseums(){
            const endpoint = "https://query.wikidata.org/sparql";
            const query = `
            SELECT ?museum ?museumLabel ?location ?image ?inception WHERE {
                VALUES ?museumType { wd:Q102161047 wd:Q3282637 wd:Q17431399 wd:Q33506 }
                ?museum wdt:P31 ?museumType.
                FILTER NOT EXISTS { ?museum wdt:P31 wd:Q23413 }  # Exclude religious buildings (churches, mosques, etc.)
                OPTIONAL { ?museum wdt:P18 ?image. }
                OPTIONAL { ?museum wdt:P571 ?inception. }
                OPTIONAL { ?museum wdt:P625 ?location. }
                SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }
            LIMIT 20
            `;

            const url = `${endpoint}?query=${encodeURIComponent(query)}&format=json`;

            try{
                const response = await fetch(url, {
                    headers:{'Accept': 'application/sparql-results+json'}
                });

                if (!response.ok) throw  new Error(`HTTP error! Status: ${response.status}`);

                const data = await response.json();
                const museumsData = data.results.bindings.map(museum =>({
                    name: museum.museumLabel?.value || "unknown",
                    image: museum.image?.value || null,
                    location: museum.location?.value || "No location data",
                    inception: museum.inception?.value?.split("T")[0] || "No data of opening",
                }));

                setMuseums(museumsData);
            } catch (error){
                setError(error.message);
            } finally{
                setLoading(false);
            }
        }
        fetchCulturalMuseums();
    }, []);

    return(
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Cultural Museums</h1>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error} </p>}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {museums.map((museum, index) =>(
                    <div key={index} className="border p-4 rounded-lg shadow-lg">
                        {museum.image && (
                            <img src={museum.image} alt={museum.name} className="w-full h-48 object-cover rounded-lg mb-2"/>
                        )}
                        <h2 className="text-lg font-semibold">{museum.name}</h2>
                        <p><strong>Founded: </strong>{museum.inception}</p>
                        <p><strong>Location: </strong>{museum.locaiton}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}


// SELECT ?museum ?museumLabel ?location ?image ?inception WHERE {
//     VALUES ?museumType { wd:Q102161047 wd:Q3282637 wd:Q17431399 wd:Q33506 }
//     ?museum wdt:P31 ?museumType.
//     FILTER NOT EXISTS { ?museum wdt:P31 wd:Q23413 }  # Exclude religious buildings (churches, mosques, etc.)
//     OPTIONAL { ?museum wdt:P18 ?image. }
//     OPTIONAL { ?museum wdt:P571 ?inception. }
//     OPTIONAL { ?museum wdt:P625 ?location. }
//     SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
// }
// LIMIT 20
// right



// SELECT DISTINCT ?museum ?museumLabel ?location ?image ?inception WHERE {
//     VALUES ?museumType { wd:Q33506 wd:Q102161047 wd:Q3282637 wd:Q82134 wd:Q17431399 }
//     ?museum wdt:P31 ?museumType.
//     OPTIONAL { ?museum wdt:P18 ?image. }
//     OPTIONAL { ?museum wdt:P571 ?inception. }
//     OPTIONAL { ?museum wdt:P625 ?location. }
//     SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
// }
// LIMIT 20
// left