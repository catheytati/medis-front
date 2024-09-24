import React from 'react'
import { Link } from 'react-router-dom';

function BannerEntrega
({ img2, img3, img4, page2, page3, page4 }) {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl">
        <Link to={`/${page2}`}>
          <div className="bg-blue-200 rounded-lg overflow-hidden shadow-lg">
            <img
              src={img2}
              alt="Imagen 2"
              className="w-full h-full object-cover"
            />
            <div class="p-5">
              <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-blue-500 dark:text-blue-800">EDITA</h5>
            </div>
          </div>
        </Link>
        <Link to={`/${page3}`}>
          <div className="bg-blue-200 rounded-lg overflow-hidden shadow-lg">
            <img
              src={img3}
              alt="Imagen 3"
              className="w-full h-full object-cover"
            />
            <div class="p-5">
              <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-blue-500 dark:text-blue-800">CONSULTA</h5>
            </div>
          </div>
        </Link>
        <Link to={`/${page4}`}>
          <div className="bg-blue-200 rounded-lg overflow-hidden shadow-lg">
            <img
              src={img4}
              alt="Imagen 4"
              className="w-full h-full object-cover"
            />
            <div class="p-5">
              <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-blue-500 dark:text-blue-800">ELIMINA</h5>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BannerEntrega;