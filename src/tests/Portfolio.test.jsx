import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Routes } from '../App';

describe.skip('Component portfolio', () => {
  test('1.1 - Portfolio', () => {
    const portfolio = render(
      <MemoryRouter initialEntries={['/portfolio']} initialIndex={0}>
        <Routes />
      </MemoryRouter>
    );
    expect(portfolio.getByText(/Projetos/i)).toBeInTheDocument();
  });
});
