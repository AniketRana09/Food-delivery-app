import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>This isa Web Series</h1>
      <User name={"Aniket Rana(Functional)"} />
      <UserClass name={"Aniket Rana (Class)"} />
    </div>
  );
};

export default About;
