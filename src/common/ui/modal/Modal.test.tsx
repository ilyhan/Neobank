import { render, screen, fireEvent, act } from '@testing-library/react';
import Modal from '@/common/ui/modal/Modal';

jest.mock("react-dom", () => ({
    ...jest.requireActual("react-dom"),
    createPortal: (children: React.ReactNode) => children,
}));

describe('Modal', () => {
    const onCloseMock = jest.fn();

    beforeEach(() => {
        jest.useFakeTimers(); 
    });

    afterEach(() => {
        jest.clearAllMocks();
        jest.useRealTimers(); 
    });

    test("Render modal", () => {
        render(
            <Modal isOpen={true} onClose={onCloseMock}>
                <div>Modal Content</div>
            </Modal>
        );

        expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    test('Not render modal', () => {
        render(
            <Modal isOpen={false} onClose={onCloseMock}>
                <div>Modal Content</div>
            </Modal>
        );

        expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });

    test("Close modal when overlay is clicked", async () => {
        render(
            <Modal isOpen={true} onClose={onCloseMock}>
                <div>Modal Content</div>
            </Modal>
        );

        const overlay = screen.getByTestId('overlay');

        await act(async () => {
            fireEvent.click(overlay);
            jest.runAllTimers(); 
        });

        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    test("Closes modal when close button is clicked",async () => {
        render(
            <Modal isOpen={true} onClose={onCloseMock}>
                <div>Modal Content</div>
            </Modal>
        );

        const closeButton = screen.getByRole('button');
        await act(async () => {
            fireEvent.click(closeButton);
            jest.runAllTimers();
        });

        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });
});