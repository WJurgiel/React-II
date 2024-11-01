import {Card, Image, Text} from "@mantine/core"
import {ToDoType} from "../../types/ToDoType"
import {FC, memo} from "react";

interface ToDoListItemProps {
    item: ToDoType;
}

export const TodoListItem: FC<ToDoListItemProps> = memo(({item}) => {
    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                    src="https://placehold.co/400x200"
                    height={160}
                    alt="Norway"
                />
            </Card.Section>

            <Text fw={500} size="lg" mt="md">
                {item.title}
            </Text>

            <Text mt="xs" c="dimmed" size="sm">
                {item.content}
            </Text>
        </Card>
    );
});