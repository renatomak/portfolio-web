import React from 'react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';
import renderWithRouter from './renderWithRouter';

describe('App - checking the routes', () => {
    test('checking route "/"', () => {
        const { getByTestId } = renderWithRouter(<App />, "/");
        const title = getByTestId('title');
        expect(title).toBeInTheDocument();
    });

});