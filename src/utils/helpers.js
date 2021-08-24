export function formatQuestion(question, author) {
  const { id, timestamp, optionOne, optionTwo } = question;
  const { name, avatarURL } = author;

  return {
    name,
    id,
    timestamp,
    avatar: avatarURL,
    optionOne,
    optionTwo,
  };
}
