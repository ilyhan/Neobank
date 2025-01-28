import map from "/public/images/worldMap.svg";
import "@/common/components/worldMap/style.scss";

const WorldMap = () => {
    return (
        <section className="world-map">
            <h2 className="world-map__title">
                You can use our services anywhere in the world
            </h2>

            <p className="world-map__description">
                Withdraw and transfer money online through our application
            </p>

            <img src={map} className="world-map__image" alt="world map"/>
        </section>
    )
};

export default WorldMap;