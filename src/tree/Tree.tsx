import { useState } from 'react';
import { TreeWithChildren } from './TreeWithChildren';
import { TreeWithNext } from './TreeWithNext';

type ItemDataWithChildren = {
    id: number;
    title: string;
    children: ItemDataWithChildren[] | undefined;
};

type ItemDataWithNext = {
    id: number;
    title: string;
    next: ItemDataWithNext[] | undefined;
};

var mockDataWithChildren = [
    { id: 100, title: '子项100', children: [{ id: 101, title: '子项101', children: undefined }] }
];
var mockDataWithNext = [{ id: 100, title: '子项100', next: [{ id: 101, title: '子项101', next: undefined }] }];

export var Tree = () => {
    var [dataWithChildren, setDataWithChildren] = useState<ItemDataWithChildren[]>(mockDataWithChildren);
    var [dataWithNext, setDataWithNext] = useState<ItemDataWithNext[]>(mockDataWithNext);
    var [input, setInput] = useState('');
    return (
        <div>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div>
                    <TreeWithChildren data={dataWithChildren} />
                </div>
                <div style={{ marginLeft: '100px' }}>
                    <TreeWithNext data={dataWithNext} />
                </div>
            </div>
            <button style={{ marginTop: '100px' }}>更新所有节点标题</button>
        </div>
    );
};
