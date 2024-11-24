import CardDesign from "@/common/components/cardDesign/CardDesign";
import Features from "@/common/components/features/Features";
import "@/modules/home/style.scss";

const Home = () => {
    return (
        <main className="main">
            <CardDesign />
            <Features />
        </main>
    )
};

export default Home;