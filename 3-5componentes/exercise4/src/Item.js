import React from "react";
import PropTypes from 'prop-types';

class Item extends React.Component {
  render() {
    return (
      <div className="item">
        <div>
          <h5>Producto: {this.props.name}</h5>
          <h6 className="text">{this.props.description}</h6>
        </div>
        <h5 className="quantity"> Cantidad: {this.props.quantity}</h5>
        <div className="badge">Categoría:{this.props.category}</div>
        <h5 className="price">Precio: {this.props.price}€</h5>
      </div>
    );
  }
}

// Así definimos las defaultProps
Item.defaultProps = {
  description: "No hay descripción"
};

// Así definimos las propTypes. Me sale un error en la consola, pero no sé si tiene que salir algo más. Investigar

Item.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default Item;
