import React from "react";

import {
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
} from "./styles";

const checkImg = "../images/check.png";

class MiddleSection extends React.Component {
	render() {
		return (
			<Wrapper>
				<MainText>
					Your{" "}
					<BackgroundText>
						<ColorText>strategy</ColorText>
					</BackgroundText>{" "}
					is only as good <br /> as your{" "}
					<BackgroundText primary>
						<ColorText>ability</ColorText>
					</BackgroundText>{" "}
					to{" "}
					<BackgroundText>
						<ColorText> execute</ColorText>
					</BackgroundText>{" "}
					it.
				</MainText>
				<Message>
					Perdoo is a simple but powerful toolkit for turning great
					<br />
					strategies into amaizing results. And it is free.
				</Message>
				<WrapperSearch>
					<Input type="email" placeholder="Entrer your email address" />
					<InputClick type="submit" value="Get started" />
				</WrapperSearch>

				<WrapperChecks>
					<WrapperCheck>
						<CheckImg src={checkImg} alt="imagen del check" />
						<CheckText>Free forever</CheckText>
					</WrapperCheck>
					<WrapperCheck>
						<CheckImg src={checkImg} alt="imagen del check" />
						<CheckText>Unlimited goals</CheckText>
					</WrapperCheck>
					<WrapperCheck>
						<CheckImg src={checkImg} alt="imagen del check" />
						<CheckText>Unlimited Users</CheckText>
					</WrapperCheck>
				</WrapperChecks>
			</Wrapper>
		);
	}
}

export default MiddleSection;
