import { fireEvent, render, screen } from '@testing-library/react';
import Precoring from '@/common/components/form/prescoring/Prescoring';
import { usePostPrescoring } from '@/api/hookApi';

jest.mock('@/api/hookApi', () => ({
    usePostPrescoring: jest.fn(),
    useDispatch: jest.fn(),
}));

jest.mock("@/store/actions", () => ({
    useActions: () => ({
        setApplicationData: jest.fn(),
    }),
}));

describe("Prescoring", () => {
    const mockMutate = jest.fn();

    beforeEach(() => {
        (usePostPrescoring as jest.Mock).mockReturnValue({
            mutate: mockMutate,
            isError: false,
            isLoading: false,
            isSuccess: false,
        });
    });

    test('Invalid data', async () => {
        render(<Precoring />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(await screen.findByText(/Enter amount/i)).toBeInTheDocument();
        expect(await screen.findByText(/Enter your last name/i)).toBeInTheDocument();
        expect(await screen.findByText(/Enter your first name/i)).toBeInTheDocument();
        expect(await screen.findByText(/Enter your email/i)).toBeInTheDocument();
        expect(await screen.findByText(/Enter your birth date/i)).toBeInTheDocument();
        expect(await screen.findByText(/Enter your passport series/i)).toBeInTheDocument();
        expect(await screen.findByText(/Enter your passport number/i)).toBeInTheDocument();
    });

    test('Invalid date of date birth', async () => {
        render(<Precoring />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        const inputDate = screen.getByPlaceholderText(/Select Date and Time/i);
        
        fireEvent.change(inputDate, { target: { value: '2000-01-01' } });
        expect(await screen.findByText(/Expected DD.MM.YYYY/i)).toBeInTheDocument();

        fireEvent.change(inputDate, { target: { value: 'date and time' } });
        expect(await screen.findByText(/Expected DD.MM.YYYY/i)).toBeInTheDocument();
        
        fireEvent.change(inputDate, { target: { value: '40.10.2000' } });
        expect(await screen.findByText(/Incorrect date/i)).toBeInTheDocument();

        fireEvent.change(inputDate, { target: { value: '19.01.2025' } });
        expect(await screen.findByText(/Incorrect age/i)).toBeInTheDocument();
    });

    test('Invalid first name', async () => {
        render(<Precoring />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        const inputName = screen.getByPlaceholderText(/For Example Jhon/i);
        
        fireEvent.change(inputName, { target: { value: "  " } });
        expect(await screen.findByText(/Incorrect data/i)).toBeInTheDocument();
    });

    test('Invalid amount', async () => {
        render(<Precoring />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        const inputAmount = screen.getByPlaceholderText(/Select amount/i);
        
        fireEvent.change(inputAmount, { target: { value: 10 } });
        expect(await screen.findByText(/Incorrect amount/i)).toBeInTheDocument();

        fireEvent.change(inputAmount, { target: { value: 60000000 } });
        expect(await screen.findByText(/Incorrect amount/i)).toBeInTheDocument();
    });

    test('Show error', () => {
        (usePostPrescoring as jest.Mock).mockReturnValue({
            mutate: mockMutate,
            isError: true,
            isLoading: false,
            isSuccess: false,
        });

        render(<Precoring />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(screen.getByText(/Sorry, an error has occurred/i)).toBeInTheDocument();
    });

    test("Show loader", async () => {
        (usePostPrescoring as jest.Mock).mockReturnValue({
            mutate: mockMutate,
            isError: false,
            isLoading: true,
            isSuccess: false,
        });

        render(<Precoring />);

        const button = screen.getByRole('button');

        expect(button).toBeDisabled();
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    test("Show error message", async () => {
        (usePostPrescoring as jest.Mock).mockReturnValue({
            mutate: mockMutate,
            isError: true,
            isLoading: false,
            isSuccess: false,
        });

        render(<Precoring />);

        expect(screen.getByText(/Sorry, an error has occurred/i)).toBeInTheDocument();
    });
});