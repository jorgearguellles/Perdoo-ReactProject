import React from "react";
import MenuPlegable from "../MenuPlegable";

import {
	WrapperHeader,
	Logo,
	WrapperMenuSearch,
	WrapperMenu,
	MenuLink,
	WrapperSearch,
	Input,
	InputClick,
} from "./styles";

const LogoDiscord = "../images/logo.png";

class Header extends React.Component {
	render() {
		return (
			<WrapperHeader>
				<Logo src={LogoDiscord} />
				<WrapperMenuSearch>
					<WrapperMenu>
						<MenuPlegable Title="Solutions" Option="Solution" />
						<MenuLink>Pricing</MenuLink>
						<MenuPlegable Title="Resources" Option="Resource" />
						<MenuLink>Login</MenuLink>
					</WrapperMenu>
					<WrapperSearch>
						<Input type="email" placeholder="Your email address" />
						<InputClick type="submit" value="Get started" />
					</WrapperSearch>
				</WrapperMenuSearch>
			</WrapperHeader>
		);
	}
}

export default Header;
