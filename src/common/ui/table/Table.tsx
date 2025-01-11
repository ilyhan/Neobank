import "@/common/ui/table/style.scss";

interface ITableProps<T> {
    header: string[];
    content: T[];
};

const Table = <T extends object>({ header, content }: ITableProps<T>) => {
    return (
        <div className="table__wrapper">
            <table className="table">
                <thead>
                    <tr>
                        {header.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    {content.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Object.values(row).map((headerItem, colIndex) => (
                                <td key={colIndex}>
                                    {headerItem}
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