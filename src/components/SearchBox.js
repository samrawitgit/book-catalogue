import React from "react";
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default function SearchBox({inputValue, setInputValue}){

    const filterOnChange = (event) => {
        console.log("hi from onChange", event.target.value)
        setInputValue(event.target.value)
    }

    return(
        <div className="search-box">

        <InputGroup>
            <FormControl
            placeholder="Search your title here"
            aria-label="Title"
            aria-describedby="basic-addon2"
            value={inputValue}
            onChange={filterOnChange}
            />
            <InputGroup.Append>
            <Button variant="outline-secondary">Search</Button>
            </InputGroup.Append>
        </InputGroup>
        </div>
    )
}

    