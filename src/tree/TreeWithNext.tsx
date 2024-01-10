type ItemData = {
    id: number;
    title: string;
    next: ItemData[] | undefined;
};

type Props = {
    data: ItemData[];
};

export var TreeWithNext = ({ data }: Props) => {
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
    data: { id, title, next }
}: {
    level: number;
    data: { id: number; title: string; next: ItemData[] | undefined };
}) => {
    return (
        <>
            <div style={{ marginLeft: `${level * 20}px` }}>{title}</div>
            {next && next.map((child) => <Item level={level + 1} data={child} />)}
        </>
    );
};
