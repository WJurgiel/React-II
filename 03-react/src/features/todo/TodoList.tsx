import {useState} from "react";
import {Button} from "@mantine/core";

export const TodoList = () => {

    const [searchParams, setSearchParams] = useState();

    // @ts-ignore
    const handleSearchChange = () => {
        setSearchParams((prev) => prev); // This line "uses" setSearchParams without changing the state
    };
    console.log(searchParams);
    return <Button variant="filled">Button</Button>;

}