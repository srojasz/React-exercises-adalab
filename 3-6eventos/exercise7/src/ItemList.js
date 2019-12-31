import React from "react";
import Item from "./Item";
import CategoryButton from './CategoryButton';

class ItemList extends React.Component {
  render() {
    return (
      <div>
        <ul className="item-list">
          {this.props.items.map(function (item, key) {
            return (
              <React.Fragment>
                <Item
                  key={key}
                  name={item.name} description={item.description} quantity={item.quantity} category={item.category} price={item.price} />
                <CategoryButton newcategory="Bebida" />
              </React.Fragment>
            )
          })}

        </ul>


      </div>
    );
  }
}
export default ItemList;
