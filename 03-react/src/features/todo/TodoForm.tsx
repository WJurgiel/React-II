import {useTodoForm} from "./hooks/useTodoForm.ts";
import {ToDoFormValues} from "../../types/ToDoFormValues.ts";
import {Button, Checkbox, Group, Paper, Stack, Textarea, TextInput} from "@mantine/core";

export const TodoForm = () => {

    const form = useTodoForm();
    const handleSubmit = (vals: ToDoFormValues) => {
        console.log(vals);
    }
    return (
        <Paper shadow="xs" p={"xl"}>
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Stack gap={"lg"}>
                    <TextInput
                        withAsterisk
                        label="Title"
                        placeholder="Title todo"
                        {...form.getInputProps('title')}
                    />
                    <Textarea withAsterisk label="content"
                              placeholder="content todo" {...form.getInputProps('content')} />

                    <Checkbox
                        label="done"
                        {...form.getInputProps('done', {type: 'checkbox'})}
                    />

                    <Group justify="flex-end" mt="md">
                        <Button type="submit">Send</Button>
                    </Group>
                </Stack>
            </form>
        </Paper>
    )
}