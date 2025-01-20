import { render, screen } from "@testing-library/react";
import Input from "@/common/ui/input/Input";
import { FieldError } from "react-hook-form";

jest.mock('@/common/svg-helper/SvgHelper', () => ({
    __esModule: true,
    default: ({ iconName, className }: { iconName: string; className: string }) => (
        <div data-testid={iconName} className={className} />
    ),
}));

describe("Input", () => {
    test("Render label", () => {
        render(<Input label="label" isRequired={false} />);

        const label = screen.getByText(/label/i);
        expect(label).toBeInTheDocument();
    });

    test("Check required label", () => {
        render(<Input label="label" />);

        const label = screen.getByText(/label */i);
        expect(label).toBeInTheDocument();
    });

    test("Check error", () => {
        const error: FieldError = { type: 'required', message: 'required' };
        render(<Input error={error} placeholder="input" />);

        const input = screen.getByPlaceholderText('input');

        expect(input).toHaveClass('input_error');
        expect(screen.getByText(/required/i)).toBeInTheDocument();
        expect(screen.queryByTestId('error')).toBeInTheDocument();
        expect(screen.queryByTestId('success_input')).not.toBeInTheDocument();
    });

    test("Default props", () => {
        render(<Input placeholder="input" className="test" required/>);

        const input = screen.getByPlaceholderText('input');

        expect(input).toBeRequired();
        expect(input).toHaveClass('test');
    });
});