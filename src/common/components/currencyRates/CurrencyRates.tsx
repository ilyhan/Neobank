import bank from "/public/images/bank.svg";
import { UseQueryResult } from "@/api/currency";
import { useEffect, useState } from "react";
import { getCurrency } from "@/common/helper/getCurrency";
import { ICurrency } from "@/common/interfaces/currency";
import { getFullDate } from "@/common/helper/timeHelper";
import CurrencyList from "@/common/components/currencyRates/CurrencyList";
import "@/common/components/currencyRates/style.scss";
import Loader from "@/common/components/loader/Loader";

const CurrencyRates = () => {
    const [currencyList, setCurrencyList] = useState<ICurrency[]>([]);
    const [date, setDate] = useState('');
    const { data, isLoading, isSuccess } = UseQueryResult();

    useEffect(() => {
        if (isSuccess && data) {
            setCurrencyList(getCurrency(data, "RUB"));
            setDate(getFullDate(data.timestamp * 1000));
        }
    }, [isLoading]);

    return (
        <section className="currency-rates">
            <header className="currency-rates__header">
                <h2 className="currency-rates__title">
                    Exchange rate in internet bank
                </h2>

                {isLoading && 'LOADING'}
                <span className="currency-rates__update">
                    Update every 15 minutes, MSC {date}
                </span>
            </header>

            <h3 className="currency-rates__subtitle">Currency</h3>

            <div className="currency-rates__info-warpper">
                {isLoading 
                    ? <Loader /> 
                    : <CurrencyList items={currencyList} />
                }

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