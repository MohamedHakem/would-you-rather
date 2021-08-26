import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../../../utils/helpers";
import { Link } from "react-router-dom";
import "./HomeCard.css";

class HomeCard extends Component {
  render() {
    const { question } = this.props;

    if (question === null) {
      return <p>This question doesn't exist.</p>;
    }

    const { name, avatar, optionOne, id } = question;

    return (
      <div className="question">
        <img className="avatar" src={avatar} alt={`Avatar of ${name}`} />
        <div className="question-info">
          <h4>{`${name} asks: `}</h4>
          <p style={{ fontWeight: 600 }}>
            Would You Rather
            <span style={{ fontWeight: 400 }}>{` ${optionOne.text}...`}</span>
          </p>
          <Link to={`questions/${id}`}>
            <button className="btn view">View Poll</button>
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    question: question
      ? formatQuestion(question, users[question.author])
      : null,
  };
}

export default connect(mapStateToProps)(HomeCard);
