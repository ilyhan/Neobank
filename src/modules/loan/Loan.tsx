import CreditCard from "@/common/components/creditCard/CreditCard";
import CreditCardTabs from "@/common/components/creditCardTabs/CreditCardTabs";
import FormCard from "@/common/components/form/FormCard";
import Steps from "@/common/components/stepsGetCard/Steps";
import "@/modules/loan/style.scss";
import { useRef } from "react";

const Loan = () => {
    const formSecion = useRef<HTMLElement>(null);

    return (
        <main className="main">
            <CreditCard formRef={formSecion}/>
            <CreditCardTabs />
            <Steps />
            <FormCard ref={formSecion} />
        </main>
    )
};

export default Loan;