import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../../../utils/helpers";
import "./AnsweredQuestion.css";

class AnsweredQuestion extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "",
    };
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  formSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { question } = this.props;

    if (question === null || question === undefined) {
      return (
        <>
          <br />
          <br />
          <div style={{ margin: "auto", width: 580, textAlign: "center" }}>
            <h1> This question doesn't exist.</h1>
            <h2>
              Go to Home from the Navigation above to find new polls from
              friends!
            </h2>
          </div>
          <br />
          <br />
        </>
      );
    }

    const { name, avatar, optionOne, optionTwo } = question;
    const condition = optionOne.votes.includes(this.props.authedUser) === true;
    const selectedAnswer = condition ? optionOne.votes : optionTwo.votes;
    const voters = optionOne.votes.length + optionTwo.votes.length;
    const percentage_of_selectedAnswer = selectedAnswer.length / voters;

    return (
      <div className="answered-question-card">
        <img className="avatar" src={avatar} alt={`Avatar of ${name}`} />
        <div className="question-info">
          <h4>{`${name} asks: `}</h4>
          {condition ? (
            <div>
              <div className="answer">
                <p>Would you rather {question.optionOne.text}</p>
                <p style={{ fontWeight: 600, color: "#59cd5d" }}>
                  Your Answer!
                </p>
                <div style={{ width: [percentage_of_selectedAnswer] }}>
                  {`${Math.round(percentage_of_selectedAnswer * 100)} %`}
                </div>
                <p className="percentage">
                  {voters * percentage_of_selectedAnswer} out of {voters} votes
                </p>
              </div>
              <div className="other-answer">
                Would you rather {question.optionTwo.text}
                <div style={{ width: [percentage_of_selectedAnswer] }}>
                  {`${Math.round((1 - percentage_of_selectedAnswer) * 100)} %`}
                </div>
                <p className="percentage">
                  {voters * (1 - percentage_of_selectedAnswer)} out of {voters}{" "}
                  votes
                </p>
              </div>
            </div>
          ) : (
            <div>
              <div className="other-answer">
                Would you rather {question.optionOne.text}
                <div>
                  <div style={{ width: [percentage_of_selectedAnswer] }}>
                    {`${Math.round(
                      (1 - percentage_of_selectedAnswer) * 100
                    )} %`}
                  </div>
                </div>
                <p className="percentage">
                  {voters * (1 - percentage_of_selectedAnswer)} out of {voters}{" "}
                  votes
                </p>
              </div>
              <div className="answer">
                <p>Would you rather {question.optionTwo.text}</p>
                <p style={{ fontWeight: 600, color: "#59cd5d" }}>
                  Your Answer!
                </p>
                <div>
                  <div style={{ width: [percentage_of_selectedAnswer] }}>
                    {`${Math.round(percentage_of_selectedAnswer * 100)} %`}
                  </div>
                </div>
                <p className="percentage">
                  {voters * percentage_of_selectedAnswer} out of {voters} votes
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    questions,
    question: question
      ? formatQuestion(question, users[question.author])
      : null,
  };
}

export default connect(mapStateToProps)(AnsweredQuestion);
