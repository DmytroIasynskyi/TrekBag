import {createContext, useEffect, useState} from "react";
import {INITIAL_ITEMS} from "../lib/constants.js";

export const ItemsContext = createContext();

function ItemsContextProvider({ children }) {
    const [items, setItems] = useState(
        () => JSON.parse(localStorage.getItem('items')) || INITIAL_ITEMS
    );

    function resetToInitialItems() {
        setItems(INITIAL_ITEMS);
    }

    function removeAllItems() {
        setItems([]);
    }

    function removeItem(id) {
        const newItems = items.filter((item) => item.id !== id);
        setItems(newItems);
    }

    function markAllItems(isComplete) {
        const newItems = items.map((item) => {
            return {...item, packed: isComplete};
        });
        setItems(newItems);
    }

    function addNewItem(itemText) {
        const newItem = {
            id: Date.now(),
            name: itemText,
            packed: false,
        };
        setItems( [...items, newItem]);
    }

    function handleToggleItem(id) {
        const newItems = items.map((item) => {
            if (item.id === id) {
                return {...item, packed: !item.packed};
            }
            return item;
        });
        setItems(newItems);
    }

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);

    return (
        <ItemsContext.Provider value={
            {
                items,
                addNewItem,
                handleToggleItem,
                removeItem,
                removeAllItems,
                resetToInitialItems,
                markAllItems,
            }
        }>
            {children}
        </ItemsContext.Provider>
    );
}

export default ItemsContextProvider;