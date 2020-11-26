import styled from "styled-components";

const WrapperHeader = styled.div`
	display: flex;
	justify-content: space-between;
`;

const Logo = styled.img`
	margin-left: 100px;
`;

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
	margin-right: 100px;
	border: none;
	border-radius: 3px;
`;

export {
	WrapperHeader,
	Logo,
	WrapperMenuSearch,
	WrapperMenu,
	MenuLink,
	WrapperSearch,
	Input,
	InputClick,
};
