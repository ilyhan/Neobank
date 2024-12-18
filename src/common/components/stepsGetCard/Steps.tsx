import { stepsGetCard } from "@/common/arrays/stepsGetCard";
import Divider from "@/common/ui/divider/Divider";
import "@/common/components/stepsGetCard/styl.scss";
import RenderList from "@/common/helper/RenderList";

const Steps = () => {
    return (
        <section className="steps">
            <h2 className="steps__title">How to get a card</h2>

            <RenderList
                items={stepsGetCard}
                classes="steps__list"
                renderItem={(item, index) => (
                    <li key={index} className="steps__item">
                        <div className="steps__item-wrapper">
                            <div className="steps__item-number">{index + 1}</div>
                            <Divider />
                        </div>

                        <p className="steps__description">
                            {item.description}
                        </p>
                    </li>
                )}
            />
        </section>
    )
};

export default Steps;