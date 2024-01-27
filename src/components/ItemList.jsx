import EmptyList from "./EmptyList.jsx";
import {useMemo, useState} from "react";
import Sorting from "./Sorting.jsx";
import {useItemsContext} from "../lib/hooks.js";

const sortingOptions = [
    {value: 'default', label: 'Sort by default'},
    {value: 'packed', label: 'Sort by Packed'},
    {value: 'unpacked', label: 'Sort by Unpacked'},
];
export default function ItemList() {
    const {items, removeItem, handleToggleItem} = useItemsContext();
    const [sortBy, setSortBy] = useState('default');


    const sortedItems = useMemo(() => {
        return [...items].sort((a, b) => {
            if (sortBy === 'packed') {
                return b.packed - a.packed;
            }
            if (sortBy === 'unpacked') {
                return a.packed - b.packed;
            }

        })
    }, [items, sortBy]);

    return (
        <ul className={'item-list'}>
            {
                items.length === 0 ?
                    <EmptyList/>
                    :
                    <Sorting
                        sortingOptions={sortingOptions}
                        sortBy={sortBy}
                        setSortBy={setSortBy}
                    />
            }
            {sortedItems.map((item) => (
                <Item
                    key={item.id}
                    item={item}
                    removeItem={removeItem}
                    handleToggleItem={handleToggleItem}
                />
            ))}
        </ul>
    );
}

function Item({handleToggleItem, item, removeItem}) {

    return (
        <li className={'item'}>
            <label>
                <input
                    type="checkbox"
                    checked={item.packed}
                    onClick={() => handleToggleItem(item.id)}
                />
                {item.name}
            </label>
            <button onClick={() => removeItem(item.id)}>❌</button>
        </li>
    );
}