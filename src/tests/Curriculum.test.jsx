import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import App, { Routes } from '../App';

describe('Component Curriculum', () => {
  test('1.1 - About me', () => {
    const curriculum = render(
      <MemoryRouter initialEntries={['/curriculum']} initialIndex={0}>
        <Routes />
      </MemoryRouter>
    );
    expect(curriculum.getByText(/sobre mim/i)).toBeInTheDocument();
    expect(curriculum.getByTestId('abstract')).toBeInTheDocument();
  });
});
