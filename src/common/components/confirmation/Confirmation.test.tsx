import { fireEvent, render, screen } from "@testing-library/react";
import { usePostCode } from "@/api/hookApi";
import Confirmation from "@/common/components/confirmation/Confirmation";

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
}));

jest.mock("@/store/actions", () => ({
    useActions: () => ({
        resetApplication: jest.fn(),
    }),
}));

jest.mock("@/api/hookApi", () => ({
    usePostCode: jest.fn(),
}));

const mockMutate = jest.fn();

describe("Confirmation", () => {
    const mockCode = '1234';

    beforeEach(() => {
        (usePostCode as jest.Mock).mockReturnValue({
            mutate: mockMutate,
            isSuccess: true,
        });
    });

    test("Check length code", () => {
        render(<Confirmation appId={1} />);

        const inputs = screen.getAllByPlaceholderText("");
    
        expect(inputs.length).toBe(4);
    });

    test("Check code", () => {
        render(<Confirmation appId={1} />);

        const inputs = screen.getAllByPlaceholderText("");
        const codeArray = mockCode.split('');
        
        inputs.forEach((item, index) => {
            fireEvent.change(item, { target: { value: codeArray[index] } });
        });

        expect(mockMutate).toHaveBeenCalledWith(mockCode);
    });

    test("Show loader", () => {
        (usePostCode as jest.Mock).mockReturnValue({
            isLoading: true,
        });
        
        render(<Confirmation appId={1} />);

        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
});