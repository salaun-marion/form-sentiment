import { useFormStatus } from 'react-dom';
import { submitForm } from '../actions/submitForm';
import Image from '../images/ironing-shirt.jpg';
import '../styles/Form.css';

export default function OpinionForm() {
  return (
    <div className="card-container">
      <form data-testid="form " action={submitForm}>
        <img src={Image} alt="blog post" />
        <h3>Evaluate our ironing service</h3>
        <label>Username </label>
        <br />
        <input
          data-testid="input-username"
          type="text"
          name="username"
          maxLength={30}
        />
        <br />
        <label>Your comment </label>
        <br />
        <textarea
          data-testid="textarea-comment"
          name="opinion"
          maxLength={1000}
        />
        <br />
        <SubmitButton />
      </form>
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} aria-label="button">
      {pending ? 'Loading...' : 'Add'}
    </button>
  );
}
