import { render, screen } from '@testing-library/react';
import Select from '@/common/ui/select/Select';
import { FieldError } from 'react-hook-form';
import { IOption } from '@/common/interfaces/form';

describe("Select", () => {
    const options: IOption[] = [
        { value: 1, title: 'Option 1' },
        { value: 2, title: 'Option 2' },
    ];

    test("Render require label", () => {
        render(<Select label="test" />);
        expect(screen.getByText(/test */i)).toBeInTheDocument();
    });

    test("Render with error", () => {
        const error: FieldError = { type: 'required', message: 'required' };
        render(<Select error={error}/>);

        expect(screen.getByText(/required/i)).toBeInTheDocument();
        expect(screen.getByRole('combobox')).toHaveClass('input_error');
    });

    test("Render with options", () => {
        render(<Select options={options} />);

        expect(screen.getByRole('option', { name: 'Option 1' })).toBeInTheDocument();
        expect(screen.getByRole('option', { name: 'Option 2' })).toBeInTheDocument();
    });

    test("Render without placeholder", () => {
        render(<Select options={options} withEmptyPlacholder={true} />);

        expect(screen.getByTestId('option')).toBeDisabled();
    });
});