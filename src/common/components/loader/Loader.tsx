import "@/common/components/loader/style.scss";
import { CSSProperties } from "react";

interface ILoaderProps {
    style?: CSSProperties;
};

const Loader = ({ style }: ILoaderProps) => {
    return (
        <div className="loader" style={style} data-testid='loader'></div>
    )
};

export default Loader;