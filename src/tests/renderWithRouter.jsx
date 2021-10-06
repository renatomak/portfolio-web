import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

const renderWithRouter = (component, rota) => ({
  ...render(
    <MemoryRouter
      initialEntries={[rota]}
    >
      {component}
    </MemoryRouter>,
  ),
});

export default renderWithRouter;
