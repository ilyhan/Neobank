import SvgHelper from '@/common/svg-helper/SvgHelper';
import Button from '@/common/ui/button/Button';
import { ForwardedRef } from 'react';
import "@/common/components/slider/style.scss";

interface ISliderActionsProps {
    onPrevClick: () => void;
    onNextClick: () => void;
    btnPrevRef: ForwardedRef<HTMLButtonElement>;
    btnNextRef: ForwardedRef<HTMLButtonElement>;
}

const SliderActions = ({ onPrevClick, onNextClick, btnPrevRef, btnNextRef }: ISliderActionsProps) => (
    <div className="slider__actions">
        <Button
            onClick={onPrevClick}
            ref={btnPrevRef}
            classes="slider__button"
            title="прокрутить влево"
        >
            <SvgHelper iconName="arrow" className="slider__button-icon" />
        </Button>

        <Button
            onClick={onNextClick}
            ref={btnNextRef}
            classes="slider__button slider__button_rotate"
            title="прокрутить вправо"
        >
            <SvgHelper iconName="arrow" className="slider__button-icon" />
        </Button>
    </div>
);

export default SliderActions;
