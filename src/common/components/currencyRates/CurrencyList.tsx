import { ICurrency } from "@/common/interfaces/currency";
import "@/common/components/currencyRates/style.scss";
import RenderList from "@/common/helper/RenderList";

interface ICurrencyListProps {
    items: ICurrency[];
}

const CurrencyList = ({ items }: ICurrencyListProps) => {
    return (
        <RenderList
            items={items}
            classes="currency-rates__list"
            renderItem={(item, index) => (
                <li key={index} className="currency-rates__item">
                    <span className="currency-rates__currency">{item.currency}:</span>
                    <span className="currency-rates__course">{item.course.toFixed(2)}</span>
                </li>
            )}
        />
    )
};

export default CurrencyList;