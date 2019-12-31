import React from "react";


class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.date = new Date();

    this.state = {
      hours: this.date.getHours(),
      minutes: this.date.getMinutes(),
      seconds: this.date.getSeconds()
    };

    setInterval(() => { this.updateClock() }, 1000);
    this.updateClock = this.updateClock.bind(this);

  }

  updateClock() {
    const date1 = new Date()
      ;
    this.setState({
      hours: date1.getHours(),
      minutes: date1.getMinutes(),
      seconds: date1.getSeconds()

    })
  }
  render() {
    const newHours = this.state.hours;
    const newMinutes = this.state.minutes;
    const newSeconds = this.state.seconds;

    return (
      <div>
        <p>Ahora mismo son las:{newHours}:{newMinutes}:{newSeconds}
        </p>

      </div>
    )
  }

}
export default Clock;