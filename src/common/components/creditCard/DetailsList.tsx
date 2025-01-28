import { creditCardDetails } from "@/common/arrays/creditCardDetails ";
import RenderList from "@/common/helper/RenderList";
import Tooltip from "@/common/ui/tooltip/Tooltip";
import "@/common/components/creditCard/style.scss";
import { ICreditCardDetails } from "@/common/interfaces/card";

const DetailsList = () => {
    return (
        <RenderList
            items={creditCardDetails}
            classes="credit-card__list"
            renderItem={(item: ICreditCardDetails, index) => (
                <li key={index} className="credit-card__item">
                    <Tooltip content={item.tooltip}>
                        <p className="credit-card__item-title">{item.title}</p>
                        <p className="credit-card__item-description">{item.description}</p>
                    </Tooltip>
                </li>
            )}
        />
    )
};

export default DetailsList;