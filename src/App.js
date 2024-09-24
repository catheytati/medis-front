import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Pacientes from "./pages/Pacientes";
import NotFound from "./pages/NotFound";
import Login from "./pages/Pacientes/Login";
import FormPaciente from "./pages/Pacientes/FormPaciente";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pacientes" element={<Pacientes />} />
          <Route path="/login" element={<Login />} />  
          <Route path="/crear_paciente" element={<FormPaciente />} />  
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
