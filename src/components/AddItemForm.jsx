import Button from "./Button.jsx";
import {useRef, useState} from "react";
import {useItemsContext} from "../lib/hooks.js";

function AddItemForm() {
    const {addNewItem} = useItemsContext();
    const [itemText, setItemText] = useState('');
    const inputRef = useRef();

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add an item</h2>
            <input
                type="text"
                value={itemText}
                onChange={(e) => setItemText(e.target.value)}
                autoFocus
                ref={inputRef}
                placeholder={"toothbrush..."}
            />
            <Button>Add to list</Button>
        </form>
    );

    function handleSubmit(e) {
        e.preventDefault();

        //basic validation
        if (!itemText) {
            alert('Please enter an item');
            inputRef.current.focus();
            return;
        }

        addNewItem(itemText);
        setItemText('');
        inputRef.current.focus();
    }
}

export default AddItemForm;