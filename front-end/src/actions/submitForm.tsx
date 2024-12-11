export const submitForm = (data: FormData) => {
  const username = data.get('username');
  const opinion = data.get('opinion');

  fetch('http://localhost:3500/user/comment', {
    method: 'POST',
    body: JSON.stringify({
      username,
      text: opinion, //TODO: change text by opinion in api
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => {
    response.json();
  });
};
