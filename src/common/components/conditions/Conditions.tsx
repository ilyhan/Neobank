import { cardConditions } from "@/common/arrays/cardConditions";
import RenderList from "@/common/helper/RenderList";
import Divider from "@/common/ui/divider/Divider";
import { ICardConditions } from "@/common/interfaces/card";
import "@/common/components/conditions/style.scss";

const Conditions = () => {
    return (
        <RenderList
            items={cardConditions}
            classes="conditions__list"
            renderItem={(item: ICardConditions, index) => (
                <li key={index} className="conditions__item">
                    <div className="conditions__content-wrapper">
                        <p className="conditions__title">{item.key}</p>
                        <div>
                            {Array.isArray(item.value)
                                ? item.value.map((val, ind) => (
                                    <p key={ind} className="conditions__descriptions">{val}</p>
                                ))
                                : <p className="conditions__descriptions">{item.value}</p>
                            }
                        </div>
                    </div>
                    <Divider classes="conditions__divider" />
                </li>
            )}
        />
    )
};

export default Conditions;