import { render, screen } from '@testing-library/react';
import CardDesign from '@/common/components/cardDesign/CardDesign';
import { cardsDesignList } from '@/common/arrays/cardsDesignList';

describe('CardDesign', () => {
  test('redner title', () => {
    render(<CardDesign />);
    const title = screen.getByText(/Choose the design you like and apply for card right now/i);
    expect(title).toBeInTheDocument();
  });

  test('render card list', () => {
    render(<CardDesign />);
    const cardList = screen.getByRole('list');
    expect(cardList).toBeInTheDocument();
    const cardItems = screen.getAllByRole('listitem');
    expect(cardItems).toHaveLength(cardsDesignList.length);
  });

  test('render button', () => {
    render(<CardDesign />);
    const button = screen.getByRole('button', { name: /Choose the card/i });
    expect(button).toBeInTheDocument();
  });
});