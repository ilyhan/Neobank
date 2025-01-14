import "@/common/ui/table/style.scss";
import { useState } from "react";
import Button from "@/common/ui/button/Button";
import SvgHelper from "@/common/svg-helper/SvgHelper";
import { formattingDate } from "@/common/helper/formattingDate";

interface ITableProps<T> {
    header: string[];
    content: T[];
};

const Table = <T extends object>({ header, content }: ITableProps<T>) => {
    const [data, setData] = useState<T[]>(content);
    const [activeCol, setActiveCol] = useState([true, ...Array(header.length - 1).fill(false)]); //колонка по которой идет сортировка помечается true 

    const handleClick = (index: number) => {
        const arr = [...data].sort((a, b) => {
            const valueA = Object.values(a)[index];
            const valueB = Object.values(b)[index];

            if (valueA < valueB) {
                return activeCol[index] ? 1 : -1;
            }
            if (valueA > valueB) {
                return activeCol[index] ? -1 : 1;
            }
            return 0;
        });

        const newActive = Array(header.length).fill(false);
        newActive[index] = !activeCol[index];
        
        setActiveCol([...newActive]);
        setData([...arr]);
    };

    return (
        <div className="table__wrapper">
            <table className="table">
                <thead>
                    <tr>
                        {header.map((item, index) => (
                            <th key={index}>
                                <Button classes="table__button" onClick={() => handleClick(index)}>
                                    {item}
                                    <SvgHelper
                                        iconName="arrow_drop_up"
                                        className={`table__icon ${activeCol[index] ? 'table__icon_active' : ''}`}
                                    />
                                </Button>
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.values(row).map((headerItem, colIndex) => (
                                <td key={colIndex}>
                                    {formattingDate(headerItem)}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;