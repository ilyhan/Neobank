import CreditCard from "@/common/components/creditCard/CreditCard";
import CreditCardTabs from "@/common/components/creditCardTabs/CreditCardTabs";
import Steps from "@/common/components/stepsGetCard/Steps";
import "@/modules/loan/style.scss";

const Loan = () => {
    return (
        <main className="main">
            <CreditCard />
            <CreditCardTabs />
            <Steps />
        </main>
    )
};

export default Loan;