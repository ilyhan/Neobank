import { fireEvent, render, screen } from "@testing-library/react";
import Offers from "@/common/components/offers/Offers";
import { useSelector } from "react-redux";
import { IOffer } from "@/common/interfaces/form";
import OfferCard from "@/common/components/offers/offerCard/OfferCard";
import { usePostAppApply } from "@/api/hookApi";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));

jest.mock("@/store/actions", () => ({
    useActions: () => ({
        setStepScoring: jest.fn(),
    }),
}));

jest.mock("@/api/hookApi", () => ({
    usePostAppApply: jest.fn(),
}));

const mockMutate = jest.fn();
const mockedUseSelector = useSelector as unknown as jest.Mock;

describe("Offers", () => {
    const mockOffers: IOffer[] = [
        {
            applicationId: 10,
            requestedAmount: 10000,
            totalAmount: 12000,
            term: 12,
            monthlyPayment: 1000,
            rate: 10,
            isInsuranceEnabled: true,
            isSalaryClient: false,
        },
        {
            applicationId: 10,
            requestedAmount: 20000,
            totalAmount: 24000,
            term: 24,
            monthlyPayment: 1500,
            rate: 8,
            isInsuranceEnabled: false,
            isSalaryClient: true,
        },
    ];

    beforeEach(() => {
        mockedUseSelector.mockImplementation((selector) =>
            selector({
                applicationReducer: {
                    offers: mockOffers,
                },
            })
        );

        (usePostAppApply as jest.Mock).mockReturnValue({
            mutate: mockMutate,
            isSuccess: false,
        });

    });

    test("Render offers", () => {
        render(<Offers />);

        const offerCards = screen.getAllByText(/Your rate:/i);
        expect(offerCards).toHaveLength(mockOffers.length);
    });

    test("Render empty offers", () => {
        mockedUseSelector.mockImplementation((selector) =>
            selector({
                applicationReducer: {
                    offers: [],
                },
            })
        );

        render(<Offers />);

        expect(screen.queryByText(/Your rate:/i)).not.toBeInTheDocument();
    });

    test("Select offer", () => {
        render(<OfferCard card={mockOffers[0]} />);

        const button = screen.getByText(/Select/i);
        fireEvent.click(button);
        expect(mockMutate).toHaveBeenCalledWith(mockOffers[0]);
    });
});