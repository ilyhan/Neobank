import { cardsDesignList } from "@/common/arrays/cardsDesignList";
import RenderList from "@/common/helper/RenderList";
import Button from "@/common/ui/button/Button";
import "@/common/components/cardDesign/style.scss";

const CardDesign = () => {
    return (
        <section className="card-design">
            <div className="card-design__header">
                <h1 className="card-design__title">
                    Choose the design you like and apply for card right now
                </h1>
                <Button classes="card-design__button">Choose the card</Button>
            </div>

            <RenderList
                items={cardsDesignList}
                classes="card-design__list"
                renderItem={(item, index) => (
                    <li className="card-design__item" key={index}>
                        <img src={item.src} alt={item.alt} />
                    </li>
                )}
            />
        </section>
    )
};

export default CardDesign;