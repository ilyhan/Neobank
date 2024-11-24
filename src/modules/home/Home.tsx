import CardDesign from "@/common/components/cardDesign/CardDesign";
import Features from "@/common/components/features/Features";
import Feedback from "@/common/components/feedback/Feedback";
import WorldMap from "@/common/components/worldMap/WorldMap";
import "@/modules/home/style.scss";

const Home = () => {
    return (
        <main className="main">
            <CardDesign />
            <Features />
            <WorldMap />
            <Feedback />
        </main>
    )
};

export default Home;