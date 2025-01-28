import "@/common/components/cashback/card/style.scss";
import { ICashbackCard } from "@/common/interfaces/card";

interface ICardProps {
    index: number;
    cashbackInfo: ICashbackCard;
};

const Card = ({ index, cashbackInfo }: ICardProps) => {
    return (
        <article className={`card-cashback ${index % 2 == 0 ? " card-cashback_white" : " card-cashback_grey"}`}>
            <p className="card-cashback__title">
                {cashbackInfo.title}
            </p>

            <p className="card-cashback__description">
                {cashbackInfo.description}
            </p>
        </article>
    )
};

export default Card;