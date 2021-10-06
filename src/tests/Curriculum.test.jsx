import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Routes } from '../App';

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

  test('1.2 - Hard skills', () => {
    const curriculum = render(
      <MemoryRouter initialEntries={['/curriculum']} initialIndex={0}>
        <Routes />
      </MemoryRouter>
    );
    expect(curriculum.getByText(/sobre mim/i)).toBeInTheDocument();
    expect(curriculum.getByTestId('abstract')).toBeInTheDocument();
  });

  test('1.3 - Hard skills', () => {
    const curriculum = render(
      <MemoryRouter initialEntries={['/curriculum']} initialIndex={0}>
        <Routes />
      </MemoryRouter>
    );
    expect(curriculum.getByText(/sobre mim/i)).toBeInTheDocument();
    expect(curriculum.getByTestId('abstract')).toBeInTheDocument();
  });

  test('1.3 - Hard skills', () => {
    const curriculum = render(
      <MemoryRouter initialEntries={['/curriculum']} initialIndex={0}>
        <Routes />
      </MemoryRouter>
    );
    expect(curriculum.getByText(/sobre mim/i)).toBeInTheDocument();
    expect(curriculum.getByTestId('abstract')).toBeInTheDocument();
  });

  test('1.4 - Experience', () => {
    const curriculum = render(
      <MemoryRouter initialEntries={['/curriculum']} initialIndex={0}>
        <Routes />
      </MemoryRouter>
    );
    expect(curriculum.getAllByTestId('period')[0]).toBeInTheDocument();
    expect(curriculum.getAllByTestId('company')[0]).toBeInTheDocument();
    expect(curriculum.getAllByTestId('occupation')[0]).toBeInTheDocument();
    expect(curriculum.getAllByTestId('resume')[0]).toBeInTheDocument();
  });
  
  test('1.5 - work experience, academic training, courses', () => {
    const curriculum = render(
      <MemoryRouter initialEntries={['/curriculum']} initialIndex={0}>
        <Routes />
      </MemoryRouter>
    );
    expect(curriculum.getByTestId('work-experience')).toBeInTheDocument();
    expect(curriculum.getByTestId('academic-education')).toBeInTheDocument();
    expect(curriculum.getByTestId('courses')).toBeInTheDocument();
  });
});
