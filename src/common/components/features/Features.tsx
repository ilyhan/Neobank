import men from "@/common/svg-helper/icons/men.svg"
import RenderList from "@/common/helper/RenderList";
import { featuresList } from "@/common/arrays/featuresList";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import "@/common/components/features/style.scss";

const Features = () => {
    return (
        <section className="features">
            <img className="features__image" src={men} alt="happy programmer" />

            <div className="features__content">
                <h2 className="features__title">We Provide Many Features You Can Use</h2>
                <p className="features__description">
                    You can explore the features that we provide with fun and have their own functions each feature
                </p>

                <RenderList
                    items={featuresList}
                    classes="features__list"
                    renderItem={(item, index) => (
                        <li key={index} className="features__item">
                            <SvgHelper iconName="success" width={20} height={20}/>
                            <span className="features__item-text">{item.title}</span>
                        </li>
                    )}
                />
            </div>
        </section>
    )
};

export default Features;