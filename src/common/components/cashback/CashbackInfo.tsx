import { cashbackCards } from "@/common/arrays/cashbackCards";
import RenderList from "@/common/helper/RenderList";
import Card from "@/common/components/cashback/card/Card";
import "@/common/components/cashback/style.scss";
import { ICashbackCard } from "@/common/interfaces/card";

const CashbackInfo = () => {
    return (
        <div className="cashback">
            <RenderList
                items={cashbackCards}
                classes="cashback__list"
                renderItem={(item: ICashbackCard, index) => (
                    <li key={index} className="cashback__item">
                        <Card index={index} cashbackInfo={item} />
                    </li>
                )}
            />
        </div>
    )
};

export default CashbackInfo;