import { fireEvent, render, screen } from "@testing-library/react";
import PaymentSchedule from "@/common/components/paymentSchedule/PaymentSchedule";
import { IPayment } from "@/common/interfaces/application";
import { paymentScheduleHeader } from "@/common/arrays/tableHeaderList";
import PaymentForm from "@/common/components/paymentSchedule/PaymentForm";

jest.mock("react-redux", () => ({
    useDispatch: jest.fn(),
}));

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
}));

jest.mock("react-dom", () => ({
    ...jest.requireActual("react-dom"),
    createPortal: (children: React.ReactNode) => children,
}));

describe("PaymentSchedule", () => {
    const mockSchedule: IPayment[] = [
        {
            number: 1,
            date: "2024-11-11",
            totalPayment: 123,
            interestPayment: 123,
            debtPayment: 123,
            remainingDebt: 123,
        },
        {
            number: 2,
            date: "2024-12-11",
            totalPayment: 123,
            interestPayment: 123,
            debtPayment: 123,
            remainingDebt: 123,
        },
    ];

    test("Show modal", async () => {
        render(<PaymentSchedule schedule={mockSchedule} appId={1} />);

        const denyBtn = screen.getByText(/deny/i);
        fireEvent.click(denyBtn);

        const modal = await screen.findByText(/Deny application/i);
        expect(modal).toBeVisible();
    });

    test("Show table", () => {
        render(<PaymentSchedule schedule={mockSchedule} appId={1} />);

        paymentScheduleHeader.forEach((item) => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });

        expect(screen.getByText(/11.11.2024/i)).toBeInTheDocument();
    });

    test("Disabled button", () => {
        render(<PaymentForm appId={1}/>);

        const checkbox = screen.getByRole('checkbox');
        const button = screen.getByRole('button');
        expect(button).toBeDisabled();

        fireEvent.click(checkbox);
        expect(button).not.toBeDisabled();
    });
}); 