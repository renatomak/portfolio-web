import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from "history";
import { render } from '@testing-library/react';

const renderWithRouter = (component, rota) => {
  const history = createMemoryHistory();
  return {
    ...render(<Router history={history} initialEntries={[rota]}>{component}</Router>), history,
  };
};

export default renderWithRouter;
