import React from "react";
import styled from "styled-components";
import MenuPlegable from "../components/MenuPlegable";

const LogoDiscord = "../images/logo.png";

const WrapperHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Logo = styled.img``;

const WrapperMenuSearch = styled.div`
	display: flex;
`;

const WrapperMenu = styled.div`
	display: flex;
	align-items: center;
`;

const MenuLink = styled.a`
	margin-left: 100px;
	margin-right: 50px;
`;

const WrapperSearch = styled.div`
	display: flex;
`;

const Input = styled.input`
	width: 200px;
`;

const InputClick = styled.input`
	background-color: Black;
	color: white;
	padding: 5px 15px;
	border: none;
	border-radius: 3px;
`;

class Develop extends React.Component {
	render() {
		return (
			<WrapperHeader>
				<Logo src={LogoDiscord} />
				<WrapperMenuSearch>
					<WrapperMenu>
						<MenuPlegable />
						<MenuLink>Pricing</MenuLink>
						<MenuPlegable />
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

export default Develop;
