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
      <div className="user-section">
        <div>
          <h1>About us</h1>
          <h2>Name :{name}</h2>
          <h3> Location:{location}</h3>
          <h4>Contact: @aniketranagmail.com</h4>
          <h4>{bio}</h4>
        </div>
        <div>
          <img src={avatar_url} alt="pfp" />
        </div>
      </div>
    );
  }
}
export default UserClass;
