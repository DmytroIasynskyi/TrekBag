import AddItemForm from "./AddItemForm.jsx";
import ButtonGroup from "./ButtonGroup.jsx";

function Sidebar() {

    return (
        <div className={'sidebar'}>
            <AddItemForm />
            <ButtonGroup />
        </div>
    );
}

export default Sidebar;