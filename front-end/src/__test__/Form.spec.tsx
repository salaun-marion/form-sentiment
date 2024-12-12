import { render, fireEvent, waitFor } from '@testing-library/react';
import OpinionForm from '../components/Form';

import { comment, title, username, button, textarea } from './constants';

describe('Opinion Form', () => {
  it('should render', () => {
    render(<OpinionForm />);

    expect(title()).toBeInTheDocument;
    expect(username()).toBeInTheDocument;
    expect(comment()).toBeInTheDocument;
    expect(button()).toBeInTheDocument;
  });

  it('should disable the submit button when form is pending', async () => {
    render(<OpinionForm />);

    await waitFor(() => {
      fireEvent.click(button());
    });

    expect(button()).toBeDisabled;
  });

  it('should check that we cannot write more than 1000 characters', async () => {
    render(<OpinionForm />);

    expect(textarea()).toHaveProperty('maxLength', 1000);
  });
});
