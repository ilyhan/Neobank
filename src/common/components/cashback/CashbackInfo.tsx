import { cashbackCards } from "@/common/arrays/cashbackCards";
import RenderList from "@/common/helper/RenderList";
import Card from "@/common/components/cashback/card/Card";
import "@/common/components/cashback/style.scss";

const CashbackInfo = () => {
    return (
        <section className="cashback">
        <RenderList
            items={cashbackCards}
            classes="cashback__list"
            renderItem={(item, index) => (
                <li key={index} className="cashback__item">
                    <Card index={index} cashbackInfo={item}/>
                </li>
            )}
        />
    </section>
    )
};

export default CashbackInfo;