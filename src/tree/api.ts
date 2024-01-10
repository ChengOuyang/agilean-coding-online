var data: Array<{ id: string; name: string; pId?: string }> = [
    { id: '0', name: 'item0', pId: undefined },
    { id: '0_1', name: 'item0_1', pId: '0' },
    { id: '0_2', name: 'item0_2', pId: '0' },
    { id: '0_3', name: 'item0_3', pId: '0' },
    { id: '1', name: 'item1', pId: undefined },
    { id: '1_1', name: 'item1_1', pId: '1' },
    { id: '1_2', name: 'item1_2', pId: '1' },
    { id: '1_3', name: 'item1_3', pId: '1' },
]

export var fetchData = () => {
    return new Promise<Array<{ id: string; name: string; pId?: string }>>((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    })
}