import VerificationInput from "@/common/ui/verificationInput/VerificationInput";
import { fireEvent, render, screen } from "@testing-library/react";

describe("VerificationInput", ()=>{
    const mockSuccessFunc = jest.fn();
    const mockCode = '123456';

    test("Check length code", () => {
        render(<VerificationInput length={6} onSuccess={mockSuccessFunc}/>);

        const inputs = screen.getAllByPlaceholderText("");
    
        expect(inputs.length).toBe(6);
    });

    test("Check code", () => {
        render(<VerificationInput length={6} onSuccess={mockSuccessFunc}/>);

        const inputs = screen.getAllByPlaceholderText("");
        const codeArray = mockCode.split('');
        
        inputs.forEach((item, index) => {
            fireEvent.change(item, { target: { value: codeArray[index] } });
        });

        expect(mockSuccessFunc).toHaveBeenCalledWith(mockCode);
    });

    test("Check class", () => {
        render(<VerificationInput length={6} onSuccess={mockSuccessFunc}/>);

        const inputs = screen.getAllByPlaceholderText("");
        
        inputs.forEach((item) => {
            fireEvent.change(item, { target: { value: '1' } });
            expect(item).toHaveClass('verification-input_has-data');
        });
    });
});