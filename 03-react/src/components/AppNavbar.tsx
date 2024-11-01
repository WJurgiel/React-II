import {useNavigate} from "react-router-dom";
import {NavLink} from "@mantine/core";
import {IconListCheck, IconPencilPlus} from "@tabler/icons-react";

export const AppNavbar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <NavLink
                onClick={() => navigate("/todo/new")}
                href="#required-for-focus"
                label="Dodaj TODO"
                leftSection={<IconPencilPlus size="1rem" stroke={1.5}/>}
            />

            <NavLink
                onClick={() => navigate("/todo/")}
                href="#required-for-focus"
                label="Lista TODO"
                leftSection={<IconListCheck size="1rem" stroke={1.5}/>}
            />
            {/*<Link to={'/todo'}>Lista TODO</Link> |*/}
            {/*<Link to={'/todo/new'}>Dodaj</Link>*/}
        </div>
    )
}