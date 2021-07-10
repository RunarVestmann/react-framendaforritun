import { useEffect, useState } from 'react';
import { loadItems, saveItems } from '../utils/localStorageUtils';

const useItemContext = () => {
    const [context, setContext] = useState({ items: loadItems() });

    useEffect(() => {
        const setItems = (items) => {
            saveItems(items);
            setContext((context) => ({
                ...context,
                items,
            }));
        };
        setContext((context) => ({
            ...context,
            setItems,
        }));
    }, [setContext]);

    return context;
};

export default useItemContext;
