import {
  RECEIVE_USERS,
  //ADD_QUESTION,
  ADD_QUESTION_ANSWER,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    // Next Case: reflect the questions created by each user in the store
    /*
    case ADD_QUESTION:
      const { authedUser, id, users } = action;

      let questions = {};
      if (true) {
        questions = {
          [authedUser]: {
            ...state[authedUser],
            // Next: reflect the questions created by each user in the store
            //questions: state[authedUser].questions.concat([id]),
          },
        };
      }

      return {
        ...questions,
      };
    */
    case ADD_QUESTION_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.id]: action.answer,
          },
        },
      };
    default:
      return state;
  }
}
