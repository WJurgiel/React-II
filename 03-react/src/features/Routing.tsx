import {RouteObject, useRoutes} from "react-router-dom";
import {Layout} from "../components/Layout.tsx";
import {TodoList} from "./todo/TodoList.tsx";
import {TodoForm} from "./todo/TodoForm.tsx";
import {ErrorPage} from "./error/ErrorPage.tsx";

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/todo',
                element: <TodoList></TodoList>
            },
            {
                path: '/todo/new',
                element: <TodoForm/>
            },
            {
                path: '/todo/:id',
                element: <TodoForm></TodoForm>
            },
            {
                path: '*',
                element: <ErrorPage/>
            }

        ]
    }
]

export const Routing = () =>{
    return useRoutes(routes);
}