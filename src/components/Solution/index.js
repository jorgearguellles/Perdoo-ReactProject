import React from "react";

import {
	WrapperSolution,
	ImgSolution,
	WrapperInfo,
	TitleInfo,
	TextInfo,
	WrapperLink,
	ImgArrow,
	Anchor,
} from "./styles";

const ArrowImg = "../images/rightarrow.png";

class Solution extends React.Component {
	render() {
		return (
			<WrapperSolution>
				<ImgSolution src={this.props.ImgSolution} />
				<WrapperInfo>
					<TitleInfo>{this.props.TitleInfo}</TitleInfo>
					<TextInfo>{this.props.TextInfo}</TextInfo>
					<WrapperLink>
						<ImgArrow src={ArrowImg} />
						<Anchor href="/">Learn more</Anchor>
					</WrapperLink>
				</WrapperInfo>
			</WrapperSolution>
		);
	}
}

export default Solution;
