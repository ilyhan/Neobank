import "@/common/components/footer/style.scss";
import logo from "/images/logoFooter.png";
import RenderList from "@/common/helper/RenderList";
import { footerList } from "@/common/arrays/footerList";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__contacts-wrapper">
                    <a href="https://www.neoflex.ru/" target="blank">
                        <img src={logo} alt="logo" />
                    </a>
                    <address className="footer__address">
                        <div className="footer__contacts">
                            <a href="tel:+74959842513" className="footer__tel">+7 (495) 984 25 13</a>
                            <a href="mailto:info@neoflex.ru" className="footer__email">info@neoflex.ru</a>
                        </div>
                    </address>
                </div>

                <RenderList
                    items={footerList}
                    classes="footer__list"
                    renderItem={(item, index) => (
                        <li key={index} className="footer__item">
                            <Link to={item.link} className="footer__link">
                                {item.title}
                            </Link>
                        </li>
                    )}
                />

                <div className="footer__divider"></div>

                <p className="footer__cookie">
                    We use cookies to personalize our services and improve the user experience
                    of our website. Cookies are small files containing information about previous
                    visits to a website. If you do not want to use cookies, please change your
                    browser settings
                </p>
            </div>
        </footer>
    )
}

export default Footer;