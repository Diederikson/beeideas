import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
render(){
    return this.state.isLoggedIn && <div>Welcome Diewd</div>
}

//   render() {
//     return this.state.isLoggedIn ? <div>YO!</div> : <div>No!</div>;
//   }

  // return (
  //     <div>
  //        <div>Welcome Diewd</div>
  //        <div>Welcome Guest overal afblijven!</div>
  //     </div>
  // )
}

export default UserGreeting;
