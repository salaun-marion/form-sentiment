import { screen } from '@testing-library/react';

export const title = () => screen.getByText('Evaluate our ironing service');
export const username = () => screen.getByText('Username');
export const comment = () => screen.getByText('Your comment');

export const button = () => screen.getByRole('button');
export const textarea = () => screen.getByTestId('textarea-comment');
