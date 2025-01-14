import Prescoring from "@/common/components/form/prescoring/Prescoring";
import "@/common/components/form/style.scss";
import { Ref, forwardRef } from "react";
import Offers from "@/common/components/offers/Offers";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { EApplicationStatus, EApplicationStep } from "@/common/enums/application";
import ContinueRegistration from "@/common/components/messages/continueRegistration/ContinueRegistration";

const FormCard = forwardRef<HTMLElement, any>((_, ref: Ref<HTMLElement>) => {
    const step = useSelector((state: RootState) => state.applicationReducer.step);
    
    return (
        <section ref={ref} className="form-wrapper">
            {(() => {
                switch (step) {
                    case EApplicationStatus.PREAPPROVAL:
                        return <Offers />;
                    case EApplicationStep.PRESCORING:
                        return <Prescoring />;
                    default:
                        return <ContinueRegistration />;
                }
            })()}
        </section>
    )
});

export default FormCard;