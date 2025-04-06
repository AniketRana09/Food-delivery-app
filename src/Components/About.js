import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log(" Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Mount");
    //API Call!
  }
  render() {
    console.log(" Parent Render");

    return (
      <div>
        <h1>This is a About us Page</h1>
        <UserClass name={"Aniket Rana (Class)"} location={"KAPURTHALA"} />{" "}
      </div>
    );
  }
}

export default About;
// const About = () => {
//   return (
//     <div>
//       <h1>This is a About us Page</h1>
//       <UserClass name={"Aniket Rana (Class)"} location={"KAPURTHALA"} />
//     </div>
//   );
// };
