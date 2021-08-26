import { saveQuestion } from "../utils/api";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
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

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((question) => dispatch(addQuestion(question)));
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
    dispatch(addQuestionAnswer({ id, authedUser, answer }));

    return null;
  };
}
