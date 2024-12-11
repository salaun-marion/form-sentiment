import { useFormStatus } from 'react-dom';
import { submitForm } from '../actions/submitForm';

export default function OpinionForm() {
  return (
    <div>
      <form action={submitForm}>
        <h3>Evaluate your pizza</h3>
        <label>Username : </label>
        <input type="text" name="username" />
        <br />
        <label>Your comment : </label>
        <input type="text" name="opinion" maxLength={1000} />
        <br />
        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const data = useFormStatus();

  return (
    <button type="submit" disabled={data.pending}>
      {data.pending ? 'Loading...' : 'Add'}
    </button>
  );
}
