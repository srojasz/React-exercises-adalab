import React from "react";
import Item from "./Item";

class ItemList extends React.Component {
  render() {
    return (
      <ul className="item-list">
        {this.props.items.map(function(item) {
          return <Item name={item.name} description={item.description} quantity={item.quantity} category={item.category} price={item.price} />;
        })}
      </ul>
    );
  }
}
export default ItemList;
