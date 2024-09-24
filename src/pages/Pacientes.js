import React from 'react'
import Banner from '../components/Banner'
import cp from '../assets/Crear.jpeg'



function Pacientes() {
  return (
    <Banner img1={cp}
    data={"PARA TI"} data1={"Accede a la creación de rol-PACIENTE"}
    page1={'crear_paciente'}/>
  );
}

export default Pacientes;