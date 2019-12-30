import React from "react";

const CityImage = props => {

  const cities = {
    '...': 'https://via.placeholder.com/700x450/ffffff/eaeaea/?text=...',
    'Buenos Aires': 'https://cdn.civitatis.com/argentina/buenos-aires/galeria/panoramica-obelisco-buenos-aires.jpg',
    'Sidney': 'https://images.clarin.com/2016/09/05/H1-w2_ntVg_1256x620.jpg',
    'Praga': 'https://cdn.civitatis.com/republica-checa/praga/galeria/plaza-ciudad-vieja.jpg',
    'Boston': 'https://www.ef.com.es/sitecore/__/~/media/universal/stage/5x2/destinations/us/boston/boston.jpg',
    'Tokyo': 'https://specials-images.forbesimg.com/imageserve/956015912/960x0.jpg?fit=scale'
  }

  const city = props.city;

  const actionToPerform = props.actionToPerform;

  return (
    <div>
      <div>
        <select onChange={actionToPerform}>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sidney">Sidney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokyo">Tokyo</option>
        </select>

      </div >

      <div className="city-image">
        <p>Tu destino es viajar a {city}</p>
        <img className="destination-image" src={cities[city]} alt={city} />
      </div>
    </div>
  );
};

export default CityImage;
