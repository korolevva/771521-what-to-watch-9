import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import Logo from './logo';
import userEvent from '@testing-library/user-event';

const history = createMemoryHistory();

describe('Component: Logo', () => {
  it('should render correctly', () => {
    render(
      <BrowserRouter>
        <Logo />
      </BrowserRouter>,
    );
    expect(screen.getByTestId('logo-letter-1')).toHaveTextContent('W');
  });

  it('should render', () => {
    history.push('/fake');
    render(
      <HistoryRouter history={history}>
        <Routes>
          <Route path="/" element={<h1>This is main page</h1>} />
          <Route path="*" element={<Logo />} />
        </Routes>
      </HistoryRouter>,
    );

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('link'));

    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
