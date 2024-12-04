import "@/common/components/sliderCard/style.scss";
import { Link } from "react-router-dom";

interface ISliderCardProps {
    src: string;
    title: string;
    description: string;
    link: string;
    alt?: string;
}

const SliderCard = ({ src, title, description, link, alt = "Картинка новости" }: ISliderCardProps) => {
    return (
        <article className="card">
            <Link to={link} target="_blank">
                <img src={src} className="card__image" alt={alt} />

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