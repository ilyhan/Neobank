import "@/common/components/messages/notification/style.scss"

interface INotificationProps {
    title: string;
    description: string;
};

const Notification = ({ title, description }: INotificationProps) => {
    return (
        <section className="notification">
            <h2 className="notification__title">{title}</h2>
            <p className="notification__description">{description}</p>
        </section>
    )
};

export default Notification;