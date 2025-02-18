import CardDesign from "@/common/components/cardDesign/CardDesign";
import CurrencyRates from "@/common/components/currencyRates/CurrencyRates";
import Features from "@/common/components/features/Features";
import Feedback from "@/common/components/feedback/Feedback";
import Slider from "@/common/components/slider/Slider";
import WorldMap from "@/common/components/worldMap/WorldMap";
import "@/modules/home/style.scss";

const Home = () => {
    return (
        <main className="main-home">
            <CardDesign />
            <Features />
            <CurrencyRates />
            <WorldMap />
            <Slider />
            <Feedback />
        </main>
    )
};

export default Home;