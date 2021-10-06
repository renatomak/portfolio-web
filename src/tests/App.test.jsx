import React from 'react';
import App from '../App';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import {render,  screen } from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom'
import userEvent from '@testing-library/user-event'

const renderApp = () => {
  const history = createMemoryHistory();
    history.push('/')
    render(
      <Router history={history}>
        <App />
      </Router>,
    )
    const { pathname } = history.location;
    return pathname;
}

describe('App', () => {
  test('1.1 - checking route "/"', () => {
    const pathname = renderApp();

    expect(screen.getByTestId('title')).toBeInTheDocument();
    expect(screen.getByTestId('sub-title')).toBeInTheDocument();
    expect(screen.getByTestId('hard-skills')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(pathname).toBe('/');
  });

  test(`1.2 - test menu links.`, () => {
    renderApp();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/curriculum/i)).toBeInTheDocument();
    expect(screen.getByText(/contact/i)).toBeInTheDocument();
  });

  test(`1.3 - test link curriculum.`, () => {
    renderApp();
    const curriculum = screen.getByTestId('curriculum')
    
    expect(curriculum).toBeInTheDocument();
    
    const leftClick = {button: 0}
    userEvent.click(curriculum, leftClick);

    expect(screen.getByText(/Sobre mim/i)).toBeInTheDocument();
  });

  test(`1.4 - test link contact.`, () => {
    renderApp();
    const contact = screen.getByTestId('contact')
    
    expect(contact).toBeInTheDocument();
    
    const leftClick = {button: 0}
    userEvent.click(contact, leftClick);

    expect(screen.getByTestId('container-contact')).toBeInTheDocument();
  });
});
