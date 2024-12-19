import AboutCardList from "@/common/components/aboutCard/AboutCardList";
import CashbackInfo from "@/common/components/cashback/CashbackInfo";
import Conditions from "@/common/components/conditions/Conditions";
import CreditCard from "@/common/components/creditCard/CreditCard";
import Faq from "@/common/components/faq/Faq";
import Steps from "@/common/components/stepsGetCard/Steps";
import "@/modules/loan/style.scss";

const Loan = () => {
    return (
        <main className="main">
            <CreditCard />
            <AboutCardList />
            <CashbackInfo />
            <Conditions />
            <Faq />
            <Steps />
        </main>
    )
};

export default Loan;