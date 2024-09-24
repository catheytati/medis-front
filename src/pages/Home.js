import React from "react";
import { Link } from "react-router-dom"; // Importa Link
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className="relative w-full bg-gray-100 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600 italic">
        Somos un laboratorio clínico enfocado en soluciones integrales
      </h2>
      <div className="container mx-auto">
        <Carousel />
        {/* Botón para consultar resultados */}
        <div className="flex justify-center mt-6">
          <Link to="/login"> {/* Ruta asignada aquí */}
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
              Consultar resultados
            </button>
          </Link>
        </div>
        {/* Otros contenidos de la página */}
      </div>
    </div>
  );
}

export default Home;





