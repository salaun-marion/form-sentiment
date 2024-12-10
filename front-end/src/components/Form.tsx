import { useFormStatus } from 'react-dom';
import { usePost } from '../function/usePost';

export default function OpinionForm() {
  const { pending, data } = useFormStatus();

  const addData = (options: any, username: string, text: string) => {
    //const [name, setName] = useState('');

    fetch(options.url, {
      method: 'POST',
      body: JSON.stringify({
        username,
        text,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      console.log('response', response);
      response.json();
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // usePost(
    //   'http://localhost:3500/user/comment',
    //   JSON.stringify(data?.get('username')),
    //   JSON.stringify(data?.get('text'))
    // );
    addData(
      { url: 'http://localhost:3500/user/comment' },
      'toto',
      'crap'
      // JSON.stringify(data?.get('username')),
      // JSON.stringify(data?.get('text'))
    );
  };

  return (
    <div>
      <h3>Evaluate your pizza</h3>
      <form onSubmit={handleSubmit}>
        <label>Username : </label>
        <input type="text" name="username" disabled={pending} />
        <br />
        <label>Your comment : </label>
        <input type="text" name="opinion" disabled={pending} maxLength={1000} />
        <br />
        <button type="submit" disabled={pending}>
          Submit
        </button>
        <br />
        <p>
          {data ? `Sending your comment, dear ${data?.get('username')}...` : ''}
        </p>
      </form>
    </div>
  );
}
