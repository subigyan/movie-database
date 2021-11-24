import React, { useRef } from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
    const { setSearchInput } = useGlobalContext();

    const searchValue = useRef("");

    // console.log(searchValue.current.value);
    const search = () => {
        setSearchInput(searchValue.current.value);
        // setSearchInput(123);
    };
    // console.log(searchInput);

    return (
        <div className="section search">
            <form className="search-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-control">
                    <label htmlFor="name">Enter Movie</label>
                    <input
                        type="text"
                        id="name"
                        ref={searchValue}
                        onChange={search}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
