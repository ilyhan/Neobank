import { useEffect, useRef, useState } from "react";
import RenderList from "@/common/helper/RenderList";
import SliderCard from "@/common/components/sliderCard/SliderCard";
import { useDebounce } from "@/common/hooks/useDebounce";
import "@/common/components/slider/style.scss";
import { useNews } from "@/api/news";
import Loader from "@/common/components/loader/Loader";
import { INews } from "@/common/interfaces/news";
import { filterNews } from "@/common/helper/filterNews";
import SliderActions from "@/common/components/slider/SliderActions";

const Slider = () => {
    const [cards, setCards] = useState<INews[]>([]);
    const { data, isLoading, isError, isSuccess } = useNews();

    useEffect(() => {
        if (data && isSuccess) {
            setCards(filterNews(data.articles));
        }
    }, [data, isSuccess]);

    const cardsList = useRef<HTMLUListElement>(null);
    const btnPrev = useRef<HTMLButtonElement>(null);
    const btnNext = useRef<HTMLButtonElement>(null);

    const scrollAmount = 360;
    const debounceDelay = 100;

    const scrollByBtn = (scroll: number) => {
        if (cardsList.current) {
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
        const list = cardsList.current;
        if (!list) return;

        const isRight = list.scrollLeft >= list.scrollWidth - list.clientWidth - 10;
        const isLeft = list.scrollLeft === 0;

        if (btnNext.current) {
            btnNext.current.disabled = isRight;
        }

        if (btnPrev.current) {
            btnPrev.current.disabled = isLeft;
        }
    };

    const handleScrollDebounce = useDebounce(handleScroll, debounceDelay);

    return (
        <section className="slider">
            <h2 className="slider__title">Current news from the world of finance</h2>

            <p className="slider__description">
                We update the news feed every 15 minutes. You can learn more
                by clicking on the news you are interested in.
            </p>

            {isError && <p>Sorry, an error has occurred</p>}

            {isLoading
                ? <Loader />
                : <RenderList
                    items={cards}
                    classes="slider__cards"
                    ref={cardsList}
                    onScroll={handleScrollDebounce}
                    onLoad={handleScroll}
                    renderItem={(item, index) => (
                        <li key={index}>
                            <SliderCard {...item} />
                        </li>
                    )}
                />
            }

            {isSuccess && !!cards.length && <SliderActions
                onPrevClick={handlePrev}
                onNextClick={handleNext}
                btnPrevRef={btnPrev}
                btnNextRef={btnNext}
            />}
        </section>
    )
};

export default Slider;