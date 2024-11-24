import RenderList from "@/common/helper/RenderList";
import bank from "/public/images/bank.svg";
import "@/common/components/currencyRates/style.scss";
import { currencyList } from "@/common/arrays/currencyList";

const CurrencyRates = () => {
    return (
        <section className="currency-rates">
            <header className="currency-rates__header">
                <h2 className="currency-rates__title">
                    Exchange rate in internet bank
                </h2>

                <span id="update-time" className="currency-rates__update">
                    Update every 15 minutes, MSC 12.11.2022
                </span>
            </header>

            <h3 className="currency-rates__subtitle">Currency</h3>

            <div className="currency-rates__info-warpper">
                <RenderList
                    items={currencyList}
                    classes="currency-rates__list"
                    renderItem={(item, index) => (
                        <li key={index} className="currency-rates__item">
                            <span className="currency-rates__currency">{item.currency}:</span>
                            <span className="currency-rates__course">{item.course.toFixed(2)}</span>
                        </li>
                    )}
                />

                <img src={bank} className="currency-rates__image" alt="bank" />
            </div>

            <footer>
                <a href="https://cbr.ru/currency_base/daily/" className="link currency-rates__link" target="_blank">
                    All courses
                </a>
            </footer>
        </section>
    )
};

export default CurrencyRates;