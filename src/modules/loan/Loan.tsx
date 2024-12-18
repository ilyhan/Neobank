import AboutCardList from "@/common/components/aboutCard/AboutCardList";
import CreditCard from "@/common/components/creditCard/CreditCard";
import Steps from "@/common/components/stepsGetCard/Steps";
import "@/modules/loan/style.scss";

const Loan = () => {
    return (
        <main className="main">
            <CreditCard />
            <AboutCardList />
            <Steps />
        </main>
    )
};

export default Loan;