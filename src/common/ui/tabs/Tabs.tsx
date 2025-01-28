import RenderList from "@/common/helper/RenderList";
import { ITab } from "@/common/interfaces/tab";
import { useState } from "react";
import Button from "@/common/ui/button/Button";
import "@/common/ui/tabs/style.scss";

interface ITabsProps {
    tabs: ITab[];
};

const Tabs = ({ tabs }: ITabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleSetClick = (index: number) => {
        setActiveTab(index);
    };
    return (
        <section className="tabs">
            <RenderList
                items={tabs}
                classes="tabs__list"
                renderItem={(tab: ITab, index) => (
                    <li key={index} className="tabs__item" data-testid='tabItem'>
                        <Button
                            classes={`tabs__button ${index == activeTab && " tabs__button_active"}`}
                            onClick={() => handleSetClick(index)}
                        >
                            {tab.title}
                        </Button>
                    </li>
                )}
            />
            {tabs[activeTab].content}
        </section>
    )
};

export default Tabs;