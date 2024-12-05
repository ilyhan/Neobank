import SvgHelper from "@/common/svg-helper/SvgHelper";
import Button from "@/common/ui/button/Button";
import { useRef } from "react";
import RenderList from "@/common/helper/RenderList";
import { newsCardList } from "@/common/arrays/newsCardLists";
import SliderCard from "@/common/components/sliderCard/SliderCard";
import { useDebounce } from "@/common/hooks/useDebounce";
import "@/common/components/slider/style.scss";

const Slider = () => {
    const cardsList = useRef<HTMLUListElement>(null);
    const btnPrev = useRef<HTMLButtonElement>(null);
    const btnNext = useRef<HTMLButtonElement>(null);

    const scrollAmount = 360;
    const debounceDelay = 100;

    const scrollByBtn = (scroll: number) => {
        if(cardsList.current){
            cardsList.current.scrollBy(scroll, 0);
        }
    };

    const handlePrev = () => {
        scrollByBtn(-scrollAmount);
    };

    const handleNext = () => {
        scrollByBtn(scrollAmount);
    };

    const handleScroll = () => {
        if (!cardsList.current) return; 
        
        const scrollLeft = cardsList.current.scrollLeft;
        const scrollWidth = cardsList.current.scrollWidth;
        const clientWidth = cardsList.current.clientWidth;
    
        const isRight = scrollLeft >= scrollWidth - clientWidth - 10;
        const isLeft = scrollLeft === 0;
    
        if (btnNext.current) {
            btnNext.current.disabled = isRight;
        }
    
        if (btnPrev.current) {
            btnPrev.current.disabled = isLeft; 
        }
    };

    const setDisabledDebounce = useDebounce(handleScroll, debounceDelay);

    return (
        <section className="slider">
            <h2 className="slider__title">Current news from the world of finance</h2>

            <p className="slider__description">
                We update the news feed every 15 minutes. You can learn more
                by clicking on the news you are interested in.
            </p>

            <RenderList
                items={newsCardList}
                classes="slider__cards"
                ref={cardsList}
                onScroll={setDisabledDebounce}
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

            <div className="slider__actions">
                <Button
                    onClick={handlePrev}
                    ref={btnPrev}
                    classes="slider__button"
                    title="прокрутить влево"
                >
                    <SvgHelper iconName="arrow" className="slider__button-icon" />
                </Button>

                <Button
                    onClick={handleNext}
                    ref={btnNext}
                    classes="slider__button slider__button_rotate"
                    title="прокрутить вправо"
                >
                    <SvgHelper iconName="arrow" className="slider__button-icon" />
                </Button>
            </div>
        </section>
    )
};

export default Slider;