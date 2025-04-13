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
        <h2 className=" text-center font-semibold text-2xl p-3 m-2 ">
          This is a About us Page
        </h2>
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
