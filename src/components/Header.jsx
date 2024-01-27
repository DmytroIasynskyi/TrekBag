import {useItemsContext} from "../lib/hooks.js";

function Header() {
    const {items} = useItemsContext();
    const totalNumberOfItems = items.length;
    const numberOfItemsPacked = items.filter((item) => item.packed).length;

    return (
        <header>
            <img src={'https://bytegrad.com/course-assets/react-nextjs/dots.png'} alt={'Logo'}/>
            <p><b>{numberOfItemsPacked}</b> / {totalNumberOfItems} items packed</p>
        </header>
    );
}

export default Header;