import { fireEvent, render, screen } from '@testing-library/react';
import Feedback from '@/common/components/feedback/Feedback';

describe('Feedback', () => {
    test('Renders support text and title', () => {
        render(<Feedback />);

        expect(screen.getByText(/Support/i)).toBeInTheDocument();
        expect(screen.getByText(/Subscribe Newsletter & get Bank News/i)).toBeInTheDocument();
    });

    test('Shows subscription message if already subscribed', () => {
        Storage.prototype.getItem = jest.fn(() => 'true');
        render(<Feedback />);

        expect(screen.getByText(/You are already subscribed to the bank's newsletter/i)).toBeInTheDocument();
    });

    test('Shows form if not subscribed', async () => {
        Storage.prototype.getItem = jest.fn(() => null);
        render(<Feedback />);

        expect(await screen.findByTestId('subscribeForm')).toBeInTheDocument();
    });

    test('Shows error if email is invalid', () => {
        Storage.prototype.getItem = jest.fn(() => null);
        render(<Feedback />);

        const input = screen.getByPlaceholderText(/Your email/i);
        const submitButton = screen.getByTestId('subscribeBtn');

        fireEvent.change(input, { target: { value: 'email@error' } });
        fireEvent.click(submitButton);
        expect(screen.getByTestId('subscribeForm')).toHaveClass('feedback__form_error');
    });
});