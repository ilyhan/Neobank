export interface INews {
    urlToImage: string;
    title: string;
    url: string;
    description: string;
}

export interface INewsResponse {
    status: string;
    totalResults: number;
    articles: INews[];
}