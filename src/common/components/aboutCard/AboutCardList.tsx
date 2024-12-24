import { aboutCard } from "@/common/arrays/aboutCard";
import "@/common/components/aboutCard/style.scss";
import RenderList from "@/common/helper/RenderList";
import Card from "@/common/components/aboutCard/card/Card";
import { IAboutCard } from "@/common/interfaces/card";

const AboutCardList = () => {
    return (
        <div className="about-card">
            <RenderList
                items={aboutCard}
                classes="about-card__list"
                renderItem={(item: IAboutCard, index) => (
                    <li key={index} className="about-card__item">
                        <Card index={index} aboutCard={item}/>
                    </li>
                )}
            />
        </div>
    )
};

export default AboutCardList;