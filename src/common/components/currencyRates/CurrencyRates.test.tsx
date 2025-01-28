import { render, screen } from '@testing-library/react';
import CurrencyRates from '@/common/components/currencyRates/CurrencyRates';
import { ICurrencyResponse } from '@/common/interfaces/currency';
import { UseQueryResult } from '@/api/currency';

jest.mock('@/api/currency', () => ({
  UseQueryResult: jest.fn(),
}));

describe('CurrencyRates', () => {
  const mockData: ICurrencyResponse = {
    success: true,
    timestamp: 1633072800,
    base: 'EUR',
    date: '2025-01-01',
    rates: {
      USD: 1.16,
      RUB: 85.5,
      EUR: 100.2
    },
  };

  const mockUseQueryResult = (overrides = {}) => ({
    data: mockData,
    isLoading: false,
    isSuccess: true,
    isError: false,
    ...overrides,
  });

  beforeEach(() => {
    (UseQueryResult as jest.Mock).mockImplementation(() => mockUseQueryResult());
  });

  test('Show error message', () => {
    (UseQueryResult as jest.Mock).mockImplementation(() =>
      mockUseQueryResult({ isError: true, isSuccess: false })
    );

    render(<CurrencyRates />);
    expect(screen.getByText(/Sorry, an error has occurred/i)).toBeInTheDocument();
  });

  test('Show loader', async () => {
    (UseQueryResult as jest.Mock).mockImplementation(() =>
      mockUseQueryResult({ isLoading: true })
    );
  
    render(<CurrencyRates />);
    
    expect(await screen.findByTestId('loader')).toBeInTheDocument();
  });

  test('Show currency list', async () => {
    (UseQueryResult as jest.Mock).mockImplementation(() =>
      mockUseQueryResult({ isLoading: false, isError: false, isSuccess: true, data: mockData })
    );
    render(<CurrencyRates />);

    expect(await screen.findByText(/USD/i)).toBeInTheDocument();
    expect(await screen.findByText(/EUR/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sorry, an error has occurred/i)).not.toBeInTheDocument();
  });
});