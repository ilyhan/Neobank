import { fireEvent, render, screen } from '@testing-library/react';
import CreditCardTabs from '@/common/components/creditCardTabs/CreditCardTabs';

describe('CreditCardTabs', () => {
  test('Default tab', () => {
    render(<CreditCardTabs />);
    const text = screen.getByText(/Cash and transfers without commission and percent/i);
    expect(text).toBeInTheDocument();
  });

  test('Click tab', () => {
    render(<CreditCardTabs />);
    const tab = screen.getByText(/Rates and conditions/i);
    fireEvent.click(tab);
    expect(screen.getByText(/Mastercard, Visa/i)).toBeInTheDocument();
  });

  test('Count tabs', () =>{
    render(<CreditCardTabs/>);
    const tabs = screen.getAllByTestId('tabItem');
    expect(tabs.length).toBe(4);
  });
});