import "@/common/components/feedback/style.scss";
import { useState } from "react";
import FeedbackForm from "@/common/components/feedback/FeedbackForm";

const Feedback = () => {
    const [isSubscribe, setIsSubscribe] = useState(!!localStorage.getItem('subscribeNews'));

    return (
        <section className="feedback">
            <p className="feedback__support">Support</p>
            <h2 className="feedback__title">Subscribe Newsletter & get Bank News</h2>

            {isSubscribe
                ? <p className="feedback__subtitle">
                    You are already subscribed to the bank's newsletter
                </p>
                : <FeedbackForm setSubscribe={setIsSubscribe} />
            }
        </section>
    )
};

export default Feedback;