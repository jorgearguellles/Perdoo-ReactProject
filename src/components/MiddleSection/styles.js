import styled from "styled-components";

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

const MainText = styled.h1`
	font-size: 50px;
	margin-bottom: 18px;
	line-height: 70px;
	margin-top: 80px;
`;

const Message = styled.h3`
	font-size: 20px;
	margin-top: 0;
	margin-bottom: 30px;
`;

const WrapperSearch = styled.div`
	width: 45%;
	border: 1px solid black;
	padding: 3px;
`;

const Input = styled.input`
	border: none;
	width: 70%;
	line-height: 25px;
`;

const InputClick = styled.input`
	background-color: #2eccfa;
	color: white;
	padding: 8px 25px;
	border: none;
	border-radius: 3px;
`;

const WrapperChecks = styled.div`
	display: flex;
`;

const WrapperCheck = styled.div`
	display: flex;
	margin: 10px;
`;

const CheckImg = styled.img`
	width: 12px;
	height: 12px;
	margin-top: 15px;
	margin-right: 10px;
`;

const CheckText = styled.p`
	font-size: 13px;
`;

const ColorText = styled.span`
	color: ${(props) => (props.primary ? "#ffab07" : "white")};
`;

const BackgroundText = styled.span`
	background-color: ${(props) => (props.primary ? "#ffab07" : "#87d3b8")};
`;

export {
	Wrapper,
	MainText,
	Message,
	WrapperSearch,
	Input,
	InputClick,
	WrapperChecks,
	WrapperCheck,
	CheckImg,
	CheckText,
	ColorText,
	BackgroundText,
};
