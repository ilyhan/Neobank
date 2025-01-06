import { useSubscribeNews } from "@/api/hookApi";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import Button from "@/common/ui/button/Button";
import { FormEvent, useEffect, useRef, useState } from "react";
import Loader from "@/common/components/loader/Loader";
import "@/common/components/feedback/style.scss";
import { emailPattern } from "@/common/helper/validationPatterns";

interface IFeedbackFormPprops {
    setSubscribe: (_: boolean) => void;
};

const FeedbackForm = ({ setSubscribe }: IFeedbackFormPprops) => {
    const [isValid, setIsValid] = useState(false);
    const { isLoading, isSuccess, mutate } = useSubscribeNews();
    const input = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (input.current && emailPattern.test(input.current.value)) {
            mutate(input.current.value);
        }
        else {
            setIsValid(true);
        }
    };

    useEffect(() => {
        if (isSuccess) {
            setSubscribe(true);
            localStorage.setItem('subscribeNews', 'true');
        }
    }, [isSuccess]);

    return (
        <form className={`feedback__form ${isValid ? 'feedback__form_error' : ''}`} onSubmit={handleSubmit}>
            <SvgHelper iconName="email" height={38} width={28} />

            <input
                type="email"
                ref={input}
                className="feedback__input"
                placeholder="Your email"
                required
            />

            <Button classes="feedback__button" type="submit" disabled={isLoading}>
                {isLoading
                    ? <Loader style={{ width: "25px" }} />
                    : <SvgHelper iconName="send" height={25} width={30} />
                }
                <span className="feedback__button-text">Subscribe</span>
            </Button>

        </form>
    )
};

export default FeedbackForm;