import SvgHelper from "@/common/svg-helper/SvgHelper";
import Button from "@/common/ui/button/Button";
import "@/common/components/slider/style.scss";
import SliderItems from "@/common/components/slider/SliderItems";

const Slider = () => {
    return (
        <section className="slider">
            <h2 className="slider__title">Current news from the world of finance</h2>
            
            <p className="slider__description">
                We update the news feed every 15 minutes. You can learn more
                by clicking on the news you are interested in.
            </p>

            <SliderItems/>

            <div className="slider__actions">
                <Button classes="slider__button" title="прокрутить влево" disabled>
                    <SvgHelper iconName="arrow" className="slider__button-icon" />
                </Button>

                <Button classes="slider__button slider__button_rotate" title="прокрутить вправо">
                    <SvgHelper iconName="arrow" className="slider__button-icon" />
                </Button>
            </div>
        </section>
    )
};

export default Slider;