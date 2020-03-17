// import React from "react";
// import "./contact.css";

// export class Contact extends React.Component {
//   state = {
//     calling: false
//   };

//   handleClick = () => {
//     if (this.state.calling) {
//       this.setState({ calling: false });
//     } else {
//       this.setState({ calling: true });
//     }
//   }; //need stage three proposal in webpack config to make this work ---- using a method as a call back (onCLick={this.handleClick} must be done this way with arrow functions.)

//   // name = "hello";
//   // lastName = "martin"; // (variables you can create as many as you want)
//   render() {
//     let contactClass = "contact";
//     if (this.state.calling) {
//       contactClass += " contact--calling";
//     }
//     return (
//       <div className={contactClass} onClick={this.handleClick}>
//         <div
//           className={`contact__avatar contact__avatar--${this.props.gender}`}
//         ></div>
//         <div className="contact__body">
//           <div className="contact__name">{this.props.name}</div>
//           <div className="contact__phone">{this.props.number}</div>
//         </div>
//         <button className="contact__callbtn"></button>
//       </div>
//     );
//   }
// }
