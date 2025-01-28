import { render, screen } from '@testing-library/react';
import Slider from '@/common/components/slider/Slider';
import { INewsResponse } from '@/common/interfaces/news';
import { useNews } from '@/api/news';

jest.mock('@/api/news', () => ({
    useNews: jest.fn(),
}));

describe('Slider', () => {
    const mockData: INewsResponse = {
        status: 'ok',
        totalResults: 3,
        articles: [
            {
                title: 'News 1',
                description: 'Description 1',
                url: 'https://example.com/1',
                urlToImage: "/public/images/error.png",
            }
        ]
    };

    const mockUseNews = (overrides = {}) => ({
        data: mockData,
        isLoading: false,
        isSuccess: true,
        isError: false,
        ...overrides,
    });

    test('Render title', async () => {
        (useNews as jest.Mock).mockImplementation(() =>
            mockUseNews()
        );
        
        render(<Slider />);

        expect(screen.getByText(/Current news from the world of finance/i)).toBeInTheDocument();
    });

    test('Show error message', () => {
        (useNews as jest.Mock).mockImplementation(() =>
            mockUseNews({ isError: true, isSuccess: false })
        );

        render(<Slider />);

        expect(screen.getByText(/Sorry, an error has occurred/i)).toBeInTheDocument();
    });

    test('Show loader', async () => {
        (useNews as jest.Mock).mockImplementation(() =>
            mockUseNews({ isLoading: true })
        );

        render(<Slider />);

        expect(await screen.findByTestId('loader')).toBeInTheDocument();
    });
});