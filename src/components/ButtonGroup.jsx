import Button from "./Button.jsx";
import {useItemsContext} from "../lib/hooks.js";

function ButtonGroup() {

    const {removeAllItems, resetToInitialItems, markAllItems} = useItemsContext();

    const secondaryButtons = [
        {
            text: 'Mark all as complete',
            onClick: () => markAllItems(true),
        },
        {
            text: 'Mark all as incomplete',
            onClick: () => markAllItems(false),
        },
        {
            text: 'Reset to initial',
            onClick: resetToInitialItems,
        },
        {
            text: 'Remove all items',
            onClick: removeAllItems,
        }
    ]

    return (
        <section className={'button-group'}>
            {secondaryButtons.map((button) => (
                <Button key={button.text + button.onClick.toString()} buttonType={'secondary'}
                        onClick={button.onClick}>{button.text}</Button>
            ))}
        </section>
    );
}

export default ButtonGroup;