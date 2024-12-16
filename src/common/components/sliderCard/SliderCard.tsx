import "@/common/components/sliderCard/style.scss";
import { Link } from "react-router-dom";

interface ISliderCardProps {
    urlToImage: string;
    title: string;
    description: string;
    url: string;
    alt?: string;
}

const SliderCard = ({ urlToImage, title, description, url, alt = "Картинка новости" }: ISliderCardProps) => {
    return (
        <article className="card">
            <Link to={url} target="_blank">
                <img src={urlToImage} className="card__image" alt={alt} />

                <p className="card__title">
                    {title}
                </p>

                <p className="card__description">
                    {description}
                </p>
            </Link>
        </article>
    )
}

export default SliderCard;