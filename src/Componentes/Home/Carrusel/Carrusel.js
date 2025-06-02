import React, { useState } from "react";
import DepBootStrapCarr from "react-bootstrap/Carousel";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpeg";
import "./Carrusel.css";

function Carrusel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <DepBootStrapCarr activeIndex={index} onSelect={handleSelect}>
      <DepBootStrapCarr.Item>
        <img
          className="alturaimg d-inline-block img-fluid rounded"
          src={img1}
          alt="venta mayor"
        />
      </DepBootStrapCarr.Item>
      <DepBootStrapCarr.Item>
        <img
          className="alturaimg d-inline-block img-fluid rounded"
          src={img2}
          alt="info venta mayor"
        />
      </DepBootStrapCarr.Item>
      <DepBootStrapCarr.Item>
        <img
          className="alturaimg d-inline-block img-fluid rounded"
          src={img3}
          alt="info venta mayor"
        />
      </DepBootStrapCarr.Item>
    </DepBootStrapCarr>
  );
}

export default Carrusel;
