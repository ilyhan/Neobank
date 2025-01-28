import { fireEvent, render, screen } from "@testing-library/react";
import { useSelector } from "react-redux";
import CreditCard from "@/common/components/creditCard/CreditCard";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
}));

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUsedNavigate,
}));

const mockedUseSelector = useSelector as unknown as jest.Mock;

describe("CreditCard", () => {
    beforeEach(() => {
        mockedUseSelector.mockImplementation((selector) =>
            selector({
                applicationReducer: {
                    step: "PRESCORING",
                    applicationId: 123,
                },
            })
        );
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test("Render correct text button on PRESCORING step", () => {
        render(<CreditCard />);

        expect(screen.getByText(/Platinum digital credit card/i)).toBeInTheDocument();
        expect(screen.getByText(/Apply for card/i)).toBeInTheDocument();
    });

    test("Render correct text button on PREAPPROVAL step", () => {
        mockedUseSelector.mockImplementation((selector) =>
            selector({
                applicationReducer: {
                    step: "PREAPPROVAL",
                    applicationId: 123,
                },
            })
        );
        render(<CreditCard />);

        expect(screen.getByText(/Choose an offer/i)).toBeInTheDocument();
    });

    test("Render correct text button on APPROVED step", () => {
        mockedUseSelector.mockImplementation((selector) =>
            selector({
                applicationReducer: {
                    step: "APPROVED",
                    applicationId: 123,
                },
            })
        );
        render(<CreditCard />);

        expect(screen.getByText(/Continue/i)).toBeInTheDocument();
    });

    test("Navigate to scoring", () => {
        mockedUseSelector.mockImplementation((selector) =>
            selector({
                applicationReducer: {
                    step: "APPROVED",
                    applicationId: 123,
                },
            })
        );
        render(<CreditCard />);

        const button = screen.getByText(/Continue/i);
        fireEvent.click(button);

        expect(mockedUsedNavigate).toHaveBeenCalledWith("/loan/123");
    });

    test("Navigate to payment schedule", () => {
        mockedUseSelector.mockImplementation((selector) =>
            selector({
                applicationReducer: {
                    step: "CC_APPROVED",
                    applicationId: 123,
                },
            })
        );
        render(<CreditCard />);

        const button = screen.getByText(/Continue/i);
        fireEvent.click(button);

        expect(mockedUsedNavigate).toHaveBeenCalledWith("/loan/123/document");
    });

    test("Navigate to sign document", () => {
        mockedUseSelector.mockImplementation((selector) =>
            selector({
                applicationReducer: {
                    step: "DOCUMENT_CREATED",
                    applicationId: 123,
                },
            })
        );
        render(<CreditCard />);

        const button = screen.getByText(/Continue/i);
        fireEvent.click(button);

        expect(mockedUsedNavigate).toHaveBeenCalledWith("/loan/123/document/sign");
    });

    test("Navigate to check code", () => {
        mockedUseSelector.mockImplementation((selector) =>
            selector({
                applicationReducer: {
                    step: "CODE",
                    applicationId: 123,
                },
            })
        );
        render(<CreditCard />);

        const button = screen.getByText(/Continue/i);
        fireEvent.click(button);

        expect(mockedUsedNavigate).toHaveBeenCalledWith("/loan/123/code");
    });
});