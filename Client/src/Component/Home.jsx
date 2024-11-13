import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6LCDt68UKv4QvN5_JmusFDzfR2CMIDKeIg&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYTg850Q1YiBA6FgXHrv7KPmeI2oaTqGypg&s',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images.length]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-200 via-teal-100 to-blue-100">
      <main className="flex-grow flex flex-col items-center">
        <div className="mt-10 flex items-center justify-center">
          <h1 className="font-bold text-6xl text-teal-800 drop-shadow-lg">
            Welcome to Museum Explorer
          </h1>
        </div>

        <div className="flex items-center justify-center mt-8">
          <div className="relative w-full max-w-lg h-64 md:h-80 lg:h-96 rounded-2xl shadow-2xl overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover rounded-2xl transition-opacity duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
          </div>
        </div>

        <div className="flex items-center justify-center mb-16">
          <button
            className="relative z-10 bg-gradient-to-r from-teal-500 via-green-400 to-blue-400 text-white font-semibold py-4 px-8 lg:px-12 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            onClick={() => navigate(`/signup`)}
          >
            <span className="relative z-20 text-lg lg:text-xl">Get Started</span>
          </button>
        </div>
      </main>

      <footer className="bg-gray-800 text-white text-center py-4 fixed bottom-0 left-0 w-full">
        <p className="text-sm lg:text-base">&copy; 2024 Notes Hub. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;