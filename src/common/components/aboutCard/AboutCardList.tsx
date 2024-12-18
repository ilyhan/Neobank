import { aboutCard } from "@/common/arrays/aboutCard";
import "@/common/components/aboutCard/style.scss";
import RenderList from "@/common/helper/RenderList";
import Card from "@/common/components/aboutCard/card/Card";

const AboutCardList = () => {
    return (
        <section className="about-card">
            <RenderList
                items={aboutCard}
                classes="about-card__list"
                renderItem={(item, index) => (
                    <li key={index} className="about-card__item">
                        <Card index={index} aboutCard={item}/>
                    </li>
                )}
            />
        </section>
    )
};

export default AboutCardList;