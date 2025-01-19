import { fireEvent, render, screen } from '@testing-library/react';
import Scoring from '@/common/components/form/scoring/Scoring';
import { usePostScoring } from '@/api/hookApi';

jest.mock('@/api/hookApi', () => ({
    usePostScoring: jest.fn(),
    useDispatch: jest.fn(),
}));

jest.mock("@/store/actions", () => ({
    useActions: () => ({
        setStepScoring: jest.fn(),
    }),
}));

jest.mock('react-router-dom', () => ({
    useParams: () => ({ applicationId: '123' }),
}));

describe("Scoring", () => {
    const mockMutate = jest.fn();

    beforeEach(() => {
        (usePostScoring as jest.Mock).mockReturnValue({
            mutate: mockMutate,
            isError: false,
            isLoading: false,
            isSuccess: false,
        });
    });

    test('Invalid data', async () => {
        render(<Scoring />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        const selectError = await screen.findAllByText(/Select one of the options/i);
        selectError.forEach(error => {
            expect(error).toBeInTheDocument();
        });
        expect(await screen.findByText(/Incorrect date of passport issue date/i)).toBeInTheDocument();
        expect(await screen.findByText(/The series must be 6 digits/i)).toBeInTheDocument();
        expect(await screen.findByText(/Department code must be 12 digits/i)).toBeInTheDocument();
        expect(await screen.findByText(/Enter your salary/i)).toBeInTheDocument();
        expect(await screen.findByText(/Enter your work experience total/i)).toBeInTheDocument();
        expect(await screen.findByText(/Enter your work experience current/i)).toBeInTheDocument();
    });

    test('Invalid date of passport issue', async () => {
        render(<Scoring />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        const inputDate = screen.getByPlaceholderText(/Select Date and Time/i);
        
        fireEvent.change(inputDate, { target: { value: '2000-01-01' } });
        expect(await screen.findByText(/Expected DD.MM.YYYY/i)).toBeInTheDocument();

        fireEvent.change(inputDate, { target: { value: 'date and time' } });
        expect(await screen.findByText(/Expected DD.MM.YYYY/i)).toBeInTheDocument();

        fireEvent.change(inputDate, { target: { value: '40.10.2000' } });
        expect(await screen.findByText(/Incorrect date/i)).toBeInTheDocument();
    });

    test('Invalid division code', async () => {
        render(<Scoring />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        const inputCode = screen.getByPlaceholderText('000000');
        
        fireEvent.change(inputCode, { target: { value: 'text' } });
        expect(await screen.findByText(/The series must be 6 digits/i)).toBeInTheDocument();

        fireEvent.change(inputCode, { target: { value: '1234567' } });
        expect(await screen.findByText(/The series must be 6 digits/i)).toBeInTheDocument();

        fireEvent.change(inputCode, { target: { value: '123456' } });
        expect(await screen.findByText(/The series must be 6 digits/i)).not.toBeInTheDocument();
    });

    test('Show error', () => {
        (usePostScoring as jest.Mock).mockReturnValue({
            mutate: mockMutate,
            isError: true,
            isLoading: false,
            isSuccess: false,
        });

        render(<Scoring />);

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(screen.getByText(/Sorry, an error has occurred/i)).toBeInTheDocument();
    });

    test("Show loader", async () => {
        (usePostScoring as jest.Mock).mockReturnValue({
            mutate: mockMutate,
            isError: false,
            isLoading: true,
            isSuccess: false,
        });

        render(<Scoring />);

        const button = screen.getByRole('button');

        expect(button).toBeDisabled();
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });

    test("Show error message", async () => {
        (usePostScoring as jest.Mock).mockReturnValue({
            mutate: mockMutate,
            isError: true,
            isLoading: false,
            isSuccess: false,
        });

        render(<Scoring />);

        expect(screen.getByText(/Sorry, an error has occurred/i)).toBeInTheDocument();
    });
});