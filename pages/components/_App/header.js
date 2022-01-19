import { Menu } from "semantic-ui-react";
import { handleLogOut } from "../../../utils/auth";

<Menu.Item onClick={handleLogOut} header>
    <Icon name="sign out" size='large'></Icon>
</Menu.Item>