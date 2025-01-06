import { ITab } from "@/common/interfaces/tab";
import Tabs from "@/common/ui/tabs/Tabs";
import AboutCardList from "@/common/components/aboutCard/AboutCardList";
import Faq from "@/common/components/faq/Faq";
import CashbackInfo from "@/common/components/cashback/CashbackInfo";
import Conditions from "@/common/components/conditions/Conditions";

const CreditCardTabs = () => {
    const creditCardTabs: ITab[] = [
        {
            title: "About card",
            content: <AboutCardList />
        },

        {
            title: "Rates and conditions",
            content: <Conditions />
        },

        {
            title: "Cashback",
            content: <CashbackInfo />
        },

        {
            title: "FAQ",
            content: <Faq />
        },
    ];
    
    return (
        <Tabs tabs={creditCardTabs} />
    )
};

export default CreditCardTabs;