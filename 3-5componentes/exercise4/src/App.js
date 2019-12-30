import React from "react";


import ItemList from "./ItemList";

const items = [
  {
    name: "Cereales con chocolate",
    description: "Cereales rellenos de chocolate",
    quantity: 2,
    category: "Cereales",
    price: 5
  },
  {
    name: "Hamburguesa con queso",
    description: "Hamburguesa rica y saludable",
    quantity: 1,
    category: "Fast-food",
    price: 15
  },
  {
    // comento la descripción para que muestre las defaultProps en el ejemplo

    name: "Agua mineral",
    // description: "Agua de un charco del Himalaya",
    quantity: 2,
    category: "Bebida",
    price: 5
  },

  // Creo un nuevo item con el precio en string para ver si funcionan las propTypes
  {
    name: "Hamburguesa sin gluten",
    description: "Hamburguesa para celíacos",
    quantity: 1,
    category: "Fast-food",
    price: "quince"
  }
];

const expensives = items.filter(function (item) {
  return item.price > 10;
});

const cheaper = items.filter(function (item) {
  return item.price <= 10;
});

function App() {
  return (
    <div>
      <h2>Todos</h2>
      <ItemList items={items} />

      <h2>Los caros</h2>
      <ItemList items={expensives} />

      <h2>Los baratos</h2>
      <ItemList items={cheaper} />
    </div>
  );
}

export default App;
