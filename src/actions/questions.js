import { saveQuestion } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion({ optionOneText, optionTwoText }) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    })
      .then((question) => dispatch(addQuestion(question)))
      .then(() => dispatch(hideLoading()));
  };
}

function addQuestionAnswer({ id, authedUser, answer }) {
  return {
    type: ADD_QUESTION_ANSWER,
    id,
    authedUser,
    answer,
  };
}

export function handleAddQuestionAnswer({ id, authedUser, answer }) {
  return (dispatch) => {
    dispatch(showLoading());

    dispatch(addQuestionAnswer({ id, authedUser, answer }));

    setTimeout(() => {
      dispatch(hideLoading());
    }, 500);

    return null;
    // Next: update the fake DB to reflect the changes as well.
    // using saveQuestionAnswer() from ./utils/api ;
  };
}
