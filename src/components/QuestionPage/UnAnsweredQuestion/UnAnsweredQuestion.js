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

    console.log(this.state.selectedOption);
  };

  render() {
    const { question } = this.props;

    console.log("this.props from UnAnsweredQuestion: ", this.props);
    console.log(
      "this.state.selectedOption from UnAnsweredQuestion: ",
      this.state.selectedOption
    );

    if (question === null) {
      return <p>This question doesn't exist.</p>;
    }

    const { name, avatar, optionOne } = question;
    console.log("optionOne from UnAnsweredQuestion: ", optionOne);
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
                {question.optionOne.text}
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
                {question.optionTwo.text}
              </label>
            </div>
            <div>Selected option is : {this.state.selectedOption}</div>
            <button
              className="btn view"
              type="submit"
              disabled={this.state.selectedOption === ""}
              //onClick={(e) => this.toQuestion(e, question.id)}
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
