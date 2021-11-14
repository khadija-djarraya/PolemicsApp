import React from 'react'
import { Button } from './NavbarElements';
const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">
            Search a keyword 
            </span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Kais Said, COVID19, ..."
            name="s" 
            />
        <Button type="submit">
            Search
        </Button> 
    </form>
);


export default SearchBar;