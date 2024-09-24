import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assets/lab1.jpg"; 
import img2 from "../assets/bacte.jpg";
import img3 from "../assets/adulto1.jpg";
import img4 from "../assets/Fam2.png";


function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="w-full max-w-5xl mx-auto mt-10">
      <Slider {...settings}>
        <div className="relative">
          <img src={img1} alt="Comprometidos" className="w-full h-96 object-cover rounded-lg shadow-lg" />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-10 text-white p-9">
            <h2 className="text-2xl font-bold">Comprometidos con la salud de nuestros pacientes.</h2>
            {/* <p>Descripción breve de la oferta 1.</p> */}
          </div>
        </div>
        <div className="relative">
          <img src={img2} alt="Entrega resultados" className="w-full h-96 object-cover rounded-lg shadow-lg" />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-10 text-white p-9">
            <h2 className="text-2xl font-bold">Entrega de resultados efectiva y segura</h2>
            {/* <p>Descripción breve de la oferta 2.</p> */}
          </div>
        </div>
        <div className="relative">
          <img src={img3} alt="Adultos" className="w-full h-96 object-cover rounded-lg shadow-lg" />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-10 text-white p-9">
            <h2 className="text-2xl font-bold">Nuestros adultos son nuestra prioridad</h2>
            {/* <p>Descripción breve de la oferta 3.</p> */}
          </div>
        </div>
        <div className="relative">
          <img src={img4} alt="Prioridad salud" className="w-full h-96 object-cover rounded-lg shadow-lg" />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-10 text-white p-9">
            <h2 className="text-2xl font-bold">Nuestra prioridad tu salud y la de tu familia</h2>
            {/* <p>Descripción breve de la oferta 2.</p> */}
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;




