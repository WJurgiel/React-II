import {SimpleGrid} from "@mantine/core"
import {ToDoType} from "../../types/ToDoType.ts";
import {TodoListItem} from "./TodoListItem.tsx";

const data: ToDoType[] = [
    {
        id: 1,
        title: "Zrobić zakupy",
        content: "Mleko, jajka, chleb",
        done: false
    },
    {
        id: 2,
        title: "Zrobić pranie",
        content: "ręczniki",
        done: false
    },
    {
        id: 3,
        title: "Zrobić obiad",
        content: "spaghetti:)",
        done: true
    },
]
export const TodoList = () => {
    return (
        <div style={{width: '100%'}}>
            <SimpleGrid cols={{base: 1, sm: 2, lg: 3}}>
                {data.map((item) => <TodoListItem key={item.id} item={item}/>)}
            </SimpleGrid>
        </div>
    )
}