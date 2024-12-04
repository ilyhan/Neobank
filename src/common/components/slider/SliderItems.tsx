import { newsCardList } from "@/common/arrays/newsCardLists"
import RenderList from "@/common/helper/RenderList"
import SliderCard from "@/common/components/sliderCard/SliderCard"
import "@/common/components/slider/style.scss";

const SliderItems = () => {
    return (
        <RenderList
            items={newsCardList}
            classes="slider__cards"
            renderItem={(item, index) => (
                <li key={index}>
                    <SliderCard
                        title={item.title}
                        description={item.description}
                        src={item.src}
                        alt={item.alt}
                        link=""
                    />
                </li>
            )}
        />
    )
};

export default SliderItems;