export const submitForm = async (data: FormData) => {
  const username = data.get('username');
  const opinion = data.get('opinion');

  if (username && opinion) {
    const doSubmit = fetch('http://localhost:3500/user/comment', {
      method: 'POST',
      body: JSON.stringify({
        username,
        text: opinion,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response: Response) => {
      return response.json();
    });

    const wait = new Promise((accept, _) => setTimeout(accept, 1000));
    await Promise.all([doSubmit, wait]);
  }
};
