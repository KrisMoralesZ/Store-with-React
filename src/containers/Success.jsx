import React from "react";
import '../styles/components/Success.css';
const Success = () => {
    return(
      <div className="Success">
        <div className="Succes-content">
          <h2>Gracias Por tu Compra</h2>
          <span>Tu Pedido llegara en </span>
          <div className="Success-map">
            Google Maps
          </div>
        </div>
      </div>
    );
}
export default Success;