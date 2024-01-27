import Select from "react-select";

function Sorting({ sortingOptions, sortBy, setSortBy }) {
    return (
        <section className={'sorting'}>
            <Select
                options={sortingOptions}
                onChange={(option) => setSortBy(option.value)}
                value={sortBy}
            />
        </section>
    );
}

export default Sorting;