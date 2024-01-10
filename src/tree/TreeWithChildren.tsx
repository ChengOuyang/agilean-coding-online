type ItemData = {
    id: number;
    title: string;
    children: ItemData[] | undefined;
};

type Props = {
    data: ItemData[];
};

export var TreeWithChildren = ({ data }: Props) => {
    return (
        <>
            {data.map((it) => (
                <Item level={0} data={it} />
            ))}
        </>
    );
};

var Item = ({
    level,
    data: { id, title, children }
}: {
    level: number;
    data: { id: number; title: string; children: ItemData[] | undefined };
}) => {
    return (
        <>
            <div style={{ marginLeft: `${level * 20}px` }}>{title}</div>
            {children && children.map((child) => <Item level={level + 1} data={child} />)}
        </>
    );
};
