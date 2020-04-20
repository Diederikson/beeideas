import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    if (this.state.isLoggedIn) {
      return <div>Yo! Youre logged in !!</div>;
    } else {
      return <div>Welkom gast!</div>;
    }
    // return (
    //     <div>
    //        <div>Welcome Diewd</div>
    //        <div>Welcome Guest overal afblijven!</div>
    //     </div>
    // )
  }
}

export default UserGreeting;
