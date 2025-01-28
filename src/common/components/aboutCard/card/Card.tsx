import SvgHelper from "@/common/svg-helper/SvgHelper";
import { IAboutCard } from "@/common/interfaces/card";
import "@/common/components/aboutCard/card/style.scss";

interface ICardProps {
    index: number;
    aboutCard: IAboutCard;
};

const Card = ({ index, aboutCard }: ICardProps) => {
    return (
        <article className={`card-about ${index % 2 == 0 ? " card-about_white" : " card-about_grey"}`}>
            <SvgHelper iconName={aboutCard.icon} className="card-about__icon" />

            <p className="card-about__title">
                {aboutCard.title}
            </p>

            <p className="card-about__description">
                {aboutCard.description}
            </p>
        </article>
    )
};

export default Card;