import React from 'react';
import { Link } from 'react-router-dom';

function Banner({ img1, data, data1, page1 }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-8 bg-gray-50">
      {/* Contenido del banner */}
      <div className="text-center mb-8">
        <h1 className="text-4xl lg:text-6xl font-bold text-blue-700 mb-4">{data}</h1>
        <p className="text-lg lg:text-2xl text-blue-500">
          {data1}
        </p>
      </div>

      {/* Espacio para 4 imágenes */}
      <div className="flex justify-center w-full">
        <Link to={`/${page1}`} className="flex justify-center">
          <div className="bg-blue-200 rounded-lg overflow-hidden shadow-lg max-w-xs">
            <img
              src={img1}
              alt="Imagen 1"
              className="w-full h-64 object-cover"
            />
            <div className="p-5">
              <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-blue-500 dark:text-blue-800">
                creación de paciente
              </h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Banner;

