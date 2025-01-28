import { render, screen, fireEvent } from '@testing-library/react';
import Table from '@/common/ui/table/Table';

jest.mock('@/common/svg-helper/SvgHelper', () => ({
    __esModule: true,
    default: ({ iconName, className }: { iconName: string; className: string }) => (
        <div data-testid="svg-icon" className={className + " " + iconName} />
    ),
}));

describe('Table', () => {
    const header = ['Name', 'Date', 'Age'];
    const content = [
        { name: 'Alice', date: '2025-10-01', amount: 23 },
        { name: 'Bob', date: '2024-09-15', amount: 30 },
    ];

    test("Render table", () => {
        render(<Table header={header} content={content} />);

        header.forEach((item) => {
            expect(screen.getByText(item)).toBeInTheDocument();
        });

        content.forEach((row) => {
            Object.values(row).forEach((value, index) => {
                if (index != 1) //игнорируем дату, так ка она форматируется в другой вид
                    expect(screen.getByText(value)).toBeInTheDocument();
            });
        });
    });

    test("Check sort func", () => {
        render(<Table header={header} content={content} />);

        const nameHeader = screen.getByText('Name');
        fireEvent.click(nameHeader);

        const firstRow = screen.getAllByRole('row')[1];
        expect(firstRow).toHaveTextContent('Bob');

        fireEvent.click(nameHeader);

        const newFirstRow = screen.getAllByRole('row')[1];
        expect(newFirstRow).toHaveTextContent('Alice');
    });

    test("Toggle class", () => {
        render(<Table header={header} content={content} />);

        const sortIcons = screen.getAllByTestId('svg-icon');
        expect(sortIcons[0]).toHaveClass('table__icon_active');
        
        sortIcons.forEach((icon, index) => {
            if (index != 0)
                expect(icon).not.toHaveClass('table__icon_active');
        });

        const nameHeader = screen.getByText('Name');
        fireEvent.click(nameHeader);

        expect(sortIcons[0]).not.toHaveClass('table__icon_active');

        fireEvent.click(nameHeader);
        expect(sortIcons[0]).toHaveClass('table__icon_active');

        sortIcons.forEach((icon, index) => {
            if (index != 0)
                expect(icon).not.toHaveClass('table__icon_active');
        });
    });

    test("Format date", () => {
        render(<Table header={header} content={content} />);

        expect(screen.getByText('01.10.2025')).toBeInTheDocument();
        expect(screen.getByText('15.09.2024')).toBeInTheDocument();
    });
});