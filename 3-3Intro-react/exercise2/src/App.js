import React from 'react';
import css from './stylesheets/app.css'
import image from './images/sara.jpg'

function App() {

  const header = (<header class="header">
    <img class="img" src={image} />
    <div class="info">
      <h2 class="name">Sara Rojas</h2>
      <p class="date">10 de diciembre de 2019</p>
    </div>
  </header>);

  const main = (<main class="main">
    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipiscing elit at fusce nascetur dictum, dictumst non hac arcu sem lacus fermentum quis euismod. Vel ultricies curabitur litora dapibus pretium eget lobortis dictumst potenti, lacinia metus eu mollis facilisis turpis nam dignissim ut, pulvinar fermentum conubia mus nostra netus accumsan cursus. Urna mauris augue maecenas est in sociis purus, faucibus conubia malesuada nulla viverra fermentum laoreet netus, pretium sapien nisl pellentesque ridiculus tempus.
  </p>
  </main>);

  const footer = (<footer class="footer">
    <p class="read-more">
      Leer más
</p>
    <div class="likes">
      <p>37</p>
      <i class="fas fa-heart"></i>
    </div>
  </footer>);

  const appRoot = (
    <React.Fragment>
      <div class="card">
        {header}
        {main}
        {footer}
      </div>
    </React.Fragment>
  );

  return appRoot;
}

export default App;
