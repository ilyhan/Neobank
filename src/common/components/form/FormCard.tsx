import Prescoring from "@/common/components/form/prescoring/Prescoring";
import "@/common/components/form/style.scss";
import { Ref, forwardRef } from "react";

const FormCard = forwardRef<HTMLElement, any>((_, ref: Ref<HTMLElement>) => {
    return (
        <section ref={ref} className="form-wrapper">
            <Prescoring />
        </section>
    )
});

export default FormCard;