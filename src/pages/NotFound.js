import React from 'react';
import logo from '../assets/logo2.jpeg';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-gray-100">
            {/* Logo de fondo con baja opacidad */}
            <div
                className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10"
                style={{ backgroundImage: `url(${logo})` }}
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600">Oops! The page you're looking for doesn't exist.</p>
            <Link
                to="/"
                className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                Go back home
            </Link>

        </div>
    );
}

export default NotFound;

