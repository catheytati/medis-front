import React, { useState } from 'react';

function Login() {
  const [formData, setFormData] = useState({
    tipoIdentificacion: '',
    numeroIdentificacion: '',
    fechaNacimiento: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Inicio de Sesión</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Campo tipo de identificación */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Tipo de Identificación
            </label>
            <select
              name="tipoIdentificacion"
              value={formData.tipoIdentificacion}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>Selecciona un tipo</option>
              <option value="cc">Cédula de ciudadanía</option>
              <option value="ce">Cédula de extranjería</option>
              <option value="ti">Tarjeta de identidad</option>
              <option value="pp">Pasaporte</option>
            </select>
          </div>

          {/* Campo número de identificación */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Número de Identificación
            </label>
            <input
              type="text"
              name="numeroIdentificacion"
              value={formData.numeroIdentificacion}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ingresa tu número"
              required
            />
          </div>

          {/* Campo fecha de nacimiento */}
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Botón de ingreso */}
          <div>
            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
