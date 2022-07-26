import React from "react";
import '../styles/components/Payment.css';
const Payment = () => {
    return(
       <div className="Payment">
        <div className="Payment-content">
          <h3>Resumen de Pedido</h3>
          <div className="Payment-button">
            Boton e pago con Paypal
          </div>
        </div>
       </div> 
    );
}
export default Payment;