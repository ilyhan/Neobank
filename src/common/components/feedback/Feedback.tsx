import SvgHelper from "@/common/svg-helper/SvgHelper";
import Button from "@/common/ui/button/Button";
import "@/common/components/feedback/style.scss";
import { FormEvent } from "react";

const Feedback = () => {
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
    };

    return (
        <section className="feedback">
            <p className="feedback__support">Support</p>
            <h2 className="feedback__title">Subscribe Newsletter & get Bank News</h2>

            <form className="feedback__form" onSubmit={handleSubmit}>
                <SvgHelper iconName="email" height={38} width={28}/>

                <input type="email" className="feedback__input" placeholder="Your email" required/>

                <Button classes="feedback__button" type="submit">
                    <SvgHelper iconName="send" height={25} width={30}/>
                    <span className="feedback__button-text">Subscribe</span>
                </Button>
            </form>
        </section>
    )
};

export default Feedback;