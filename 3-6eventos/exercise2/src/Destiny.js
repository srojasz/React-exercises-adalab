import React from "react";

const onChangeCity = function(event) {
  const cityValue = event.target.value;

  return alert(`Tu destino es viajar a ${cityValue}`);
};

function Destiny() {
  return (
    <select onChange={onChangeCity}>
      <option>Buenos Aires</option>
      <option>Sidney</option>
      <option>Praga</option>
      <option>Boston</option>
      <option>Tokio</option>
    </select>
  );
}

export default Destiny;
