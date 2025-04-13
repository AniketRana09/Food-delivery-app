import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "xyz",
        bio: "default",
        location: "acd",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/AniketRana09");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  render() {
    const { name, bio, avatar_url, location } = this.state.userInfo;

    return (
      <div className="flex justify-between border border-black w-2/3 mx-auto my-auto shadow-lg bg-slate-300 p-5 items-center rounded-xl">
        <div className="text-lg font-semibold mx-auto">
          <h1>About us</h1>
          <h2>Name :{name}</h2>
          <h3> Location:{location}</h3>
          <h4>Contact: @aniketranagmail.com</h4>
          <h4>{bio}</h4>
        </div>
        <div>
          <img className={"rounded-full h-1/3"} src={avatar_url} alt="pfp" />
        </div>
      </div>
    );
  }
}
export default UserClass;
