import { INews } from "@/common/interfaces/news";

const checkImage = (urlToImage: string) => {
    const img = new Image();
    img.src = urlToImage;
    return img.complete;
};

const checkDescription = (description: string) => {
    return !(/<\/?[a-z][\s\S]*?>/.test(description));
};

export const filterNews = (data: INews[]) => {
    return data.filter(item => item.urlToImage && checkImage(item.urlToImage) &&
        item.description && checkDescription(item.description));
};