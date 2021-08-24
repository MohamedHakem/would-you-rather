import React, { Component } from "react";
import LeaderCard from "./LeaderCard";
import { connect } from "react-redux";

class Leaderboard extends Component {
  shouldComponentUpdate() {}

  render() {
    const tryAgain = Object.keys(this.props.users).sort(
      (a, b) =>
        Object.keys(this.props.users[b].answers).length -
        Object.keys(this.props.users[a].answers).length
    );

    return (
      <div>
        <ul style={{ padding: "10px 30px" }}>
          {tryAgain.map((user) => (
            <li key={user} className="leader-card">
              <LeaderCard user={this.props.users[user]} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ users, questions }) {
  return {
    users,
    questions,
  };
}

export default connect(mapStateToProps)(Leaderboard);
