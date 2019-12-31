import React from "react";


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

export default Item;
