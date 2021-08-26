import React, { Component } from "react";
import { connect } from "react-redux";
import { formatQuestion } from "../../../utils/helpers";
import { handleAddQuestionAnswer } from "../../../actions/questions";

class UnAnsweredQuestion extends Component {
  constructor() {
    super();
    this.state = {
      selectedOption: "",
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      selectedOption: event.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { dispatch, question, authedUser } = this.props;

    dispatch(
      handleAddQuestionAnswer({
        id: question.id,
        authedUser,
        answer: this.state.selectedOption,
      })
    );
  };

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
    return (
      <div className="question">
        <img className="avatar" src={avatar} alt={`Avatar of ${name}`} />
        <div className="question-info">
          <h4>{`${name} asks: `}</h4>
          <p style={{ fontWeight: 600 }}>
            Would You Rather <br />
          </p>
          <form onSubmit={this.handleSubmit}>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="optionOne"
                  checked={this.state.selectedOption === "optionOne"}
                  onChange={this.onChange}
                />
                {optionOne.text}
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  value="optionTwo"
                  checked={this.state.selectedOption === "optionTwo"}
                  onChange={this.onChange}
                />
                {optionTwo.text}
              </label>
            </div>
            <button
              className="btn view"
              type="submit"
              disabled={this.state.selectedOption === ""}
            >
              Submit
            </button>
          </form>
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

export default connect(mapStateToProps)(UnAnsweredQuestion);
