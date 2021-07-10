let nextItemID = '0';
{
    const id = localStorage.getItem('nextItemID');
    if (id) nextItemID = JSON.parse(id);
}

export const loadItems = () => {
    const items = localStorage.getItem('items');
    if (items) return JSON.parse(items);
    return [];
};

export const saveItems = (items) => {
    localStorage.setItem('items', JSON.stringify(items));
};

export const createItem = (item) => {
    item.id = nextItemID;
    nextItemID = String(Number(nextItemID) + 1);
    localStorage.setItem('nextItemID', JSON.stringify(nextItemID));
    return item;
};
