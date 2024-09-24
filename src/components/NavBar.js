import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-400 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="w-18 h-12" src={logo} alt="" />
            </div>
            <div className="ml-4 font-bold text-xl text-sky-900">MEDIS-LABORATORIO CLÍNICO</div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="text-sky-900 hover:bg-sky-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </Link>
              <Link
                to="/pacientes"
                className="text-sky-900 hover:bg-sky-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Pacientes
              </Link>
              <Link
                to="/medicos"
                className="text-sky-900 hover:bg-sky-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Médicos
              </Link>
              <Link
                to="/historias"
                className="text-sky-900 hover:bg-sky-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Historias
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-sky-400 inline-flex items-center justify-center p-2 rounded-md text-sky-900 hover:text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-300 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-sky-900 hover:bg-sky-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/pacientes"
              className="text-sky-900 hover:bg-sky-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Pacientes
            </Link>
            <Link
              to="/medicos"
              className="text-sky-900 hover:bg-sky-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Médicos
            </Link>
            <Link
              to="/historias"
              className="text-sky-900 hover:bg-sky-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Historias
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;