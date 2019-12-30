import React from 'react';


class MediaCard extends React.Component {
  render() {

    return (
      <React.Fragment>
        <div class="card">
          <header class="header">
            <img class="img" src={this.props.img} alt={this.props.alt} />
            <div class="info">
              <h2 class="name">{this.props.name}</h2>
              <p class="date">{this.props.date}</p>
            </div>
          </header>
          <main class="main">
            <p class="text">
              Lorem ipsum dolor sit amet consectetur adipiscing elit at fusce nascetur dictum, dictumst non hac arcu sem lacus fermentum quis euismod. Vel ultricies curabitur litora dapibus pretium eget lobortis dictumst potenti, lacinia metus eu mollis facilisis turpis nam dignissim ut, pulvinar fermentum conubia mus nostra netus accumsan cursus. Urna mauris augue maecenas est in sociis purus, faucibus conubia malesuada nulla viverra fermentum laoreet netus, pretium sapien nisl pellentesque ridiculus tempus.
            </p>
          </main>
          <footer class="footer">
            <p class="read-more">
              Leer más
            </p>
            <div class="likes">
              <p>{this.props.likes}</p>
              <i class="fas fa-heart"></i>
            </div>
          </footer>
        </div>
      </React.Fragment>
    );
  }
}



export default MediaCard;
