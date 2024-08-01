import { render, screen } from '@testing-library/react';
import { useQuery } from '@apollo/client';
import Countries from './Countries';

// Mock the useQuery hook from Apollo Client
jest.mock('@apollo/client', () => ({
  ...jest.requireActual('@apollo/client'),
  useQuery: jest.fn(),
}));

const mockCountriesData = {
  countries: [
    { code: 'US', name: 'United States', emoji: '🇺🇸', capital: 'Washington, D.C.' },
    { code: 'CA', name: 'Canada', emoji: '🇨🇦', capital: 'Ottawa' },
  ],
};

describe('Countries Component', () => {
  it('displays loading state initially', () => {
    (useQuery as jest.Mock).mockReturnValue({ loading: true });
    render(<Countries />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('displays error state', () => {
    (useQuery as jest.Mock).mockReturnValue({ error: new Error('Failed to fetch') });
    render(<Countries />);
    expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument();
  });

  it('displays countries data', () => {
    (useQuery as jest.Mock).mockReturnValue({ data: mockCountriesData });
    render(<Countries />);
    expect(screen.getByText('Countries with Capitals (GraphQL Example)')).toBeInTheDocument();
    expect(screen.getByText('United States 🇺🇸')).toBeInTheDocument();
    expect(screen.getByText('Canada 🇨🇦')).toBeInTheDocument();
  });
});
