import React from 'react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';


describe('App - checking the routes', () => {
    test('1.1 - checking route "/"', () => {
        const { getByTestId } = renderWithRouter(<App />, "/");
        const title = getByTestId('title');
        const subTitle = getByTestId('sub-title');
        const hardSkills = getByTestId('hard-skills');
        const header = getByTestId('header');

        expect(title).toBeInTheDocument();
        expect(subTitle).toBeInTheDocument();
        expect(hardSkills).toBeInTheDocument();
        expect(header).toBeInTheDocument();
    });

    test(`1.2 - test menu links.`, () => {
    const { history } = renderWithRouter(<App />);
    const home = screen.getByText(/Home/i);
    const portfolio = screen.getByText(/portfolio/i);
    const curriculum = screen.getByText(/curriculum/i);
    const contact = screen.getByText(/contact/i);
    const { pathname } = history.location;

    expect(home).toBeInTheDocument();
    expect(portfolio).toBeInTheDocument();
    expect(curriculum).toBeInTheDocument();
    expect(contact).toBeInTheDocument();
    expect(pathname).toBe('/');
  });  
});