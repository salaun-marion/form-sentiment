import { useFormStatus } from 'react-dom';
import { submitForm } from '../actions/submitForm';
import Image from '../images/ironing-shirt.jpg';
import '../styles/Form.css';

export default function OpinionForm() {
  return (
    <div className="card-container">
      <form action={submitForm}>
        <img src={Image} alt="blog post" />
        <h3>Evaluate our ironing service</h3>
        <label>Username </label>
        <br />
        <input type="text" name="username" />
        <br />
        <label>Your comment </label>
        <br />
        <textarea name="opinion" maxLength={1000} />
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
