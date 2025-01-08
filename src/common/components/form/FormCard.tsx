import Prescoring from "@/common/components/form/prescoring/Prescoring";
import "@/common/components/form/style.scss";
import { Ref, forwardRef } from "react";
import Offers from "@/common/components/offers/Offers";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { EApplicationStep } from "@/common/enums/application";
import ContinueRegistration from "@/common/components/continueRegistration/ContinueRegistration";

const FormCard = forwardRef<HTMLElement, any>((_, ref: Ref<HTMLElement>) => {
    const step = useSelector((state: RootState) => state.applicationReducer.step);

    return (
        <section ref={ref} className="form-wrapper">
            {step == EApplicationStep.OFFERS
                ? <Offers />
                : step == EApplicationStep.SCORING
                    ? <ContinueRegistration />
                    : <Prescoring />
            }
        </section>
    )
});

export default FormCard;