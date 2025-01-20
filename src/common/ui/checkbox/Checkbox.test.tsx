import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "@/common/ui/checkbox/Checkbox";

describe("Checkbox", () => {
    test("Toggle checked", () => {
        render(<Checkbox name="test" />);

        const checkbox = screen.getByRole('checkbox');
        expect(checkbox).not.toBeChecked();

        fireEvent.click(checkbox);

        expect(checkbox).toBeChecked();
    });

    test("Call function", () => {
        const checkFunc = jest.fn();
        render(<Checkbox name="test" onChecked={checkFunc} />);

        const checkbox = screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        expect(checkFunc).toHaveBeenCalledTimes(1);
    });

    test("Render label", () => {
        render(<Checkbox name="test" label="label" />);

        const label = screen.getByLabelText('label');
        expect(label).toBeInTheDocument();
    });
});