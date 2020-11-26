import styled from "styled-components";

const WrapperMenuPlegable = styled.div`
	display: flex;
`;

const WrapperTitle = styled.div`
	display: flex;
`;

const WrapperTitleOptions = styled.div`
	width: 10px;
`;

const ImgDownArrow = styled.img`
	margin-top: 20px;
	margin-left: 10px;
	width: 40px;
	width: 15px;
	height: 15px;
`;

const Title = styled.p``;

const List = styled.ul`
	display: none;
	list-style: none;
	padding: 15px;
	position: absolute;
	text-align: center;
	margin: -15px 0px 0px -10px;
	${WrapperMenuPlegable}:hover & {
		display: block;
	}
`;

const ItemList = styled.li`
	margin: 5px 0px;
`;

const Anchor = styled.a`
	color: black;
	text-decoration: none;
	font-family: Quicksand;
	cursor: pointer;
	${ItemList}:hover & {
		color: #2eccfa;
	}
`;

export {
	WrapperMenuPlegable,
	WrapperTitle,
	WrapperTitleOptions,
	ImgDownArrow,
	Title,
	List,
	ItemList,
	Anchor,
};
