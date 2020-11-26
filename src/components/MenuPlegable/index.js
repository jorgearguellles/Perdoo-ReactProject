import React from "react";

import {
	WrapperMenuPlegable,
	WrapperTitle,
	WrapperTitleOptions,
	ImgDownArrow,
	Title,
	List,
	ItemList,
	Anchor,
} from "./styles";

const Arrow = "../../images/downarrow.png";

class MenuPlegable extends React.Component {
	render() {
		return (
			<WrapperMenuPlegable>
				<WrapperTitleOptions>
					<WrapperTitle>
						<Title>{this.props.Title}</Title>
						<ImgDownArrow src={Arrow} />
					</WrapperTitle>
					<List>
						<ItemList>
							<Anchor href="/">{this.props.Option} 1</Anchor>
						</ItemList>
						<ItemList>
							<Anchor href="/">{this.props.Option} 2</Anchor>
						</ItemList>
						<ItemList>
							<Anchor href="/">{this.props.Option} 3</Anchor>
						</ItemList>
					</List>
				</WrapperTitleOptions>
			</WrapperMenuPlegable>
		);
	}
}

export default MenuPlegable;
