import "@/common/components/messages/notification/style.scss"
import { CSSProperties } from "react";

interface INotificationProps {
    title: string;
    description: string;
    wrapperStyle?: CSSProperties;
    descriptionStyle?: CSSProperties;
};

const Notification = ({ title, description, wrapperStyle, descriptionStyle }: INotificationProps) => {
    return (
        <section className="notification" style={wrapperStyle}>
            <h2 className="notification__title">{title}</h2>
            <p className="notification__description" style={descriptionStyle}>{description}</p>
        </section>
    )
};

export default Notification;