import React from "react";
import Solution from "../Solution";
import {
	WrapperBottomSections,
	TitleSection,
	WrapperSolutions,
} from "./styles";

class BottomSection extends React.Component {
	render() {
		return (
			<WrapperBottomSections>
				<TitleSection>One product, three solutions</TitleSection>
				<WrapperSolutions>
					<Solution
						ImgSolution="../images/roadmapImg.png"
						TitleInfo="Roadmap to succes"
						TextInfo="Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book."
					/>
					<Solution
						ImgSolution="../images/goalsImg.png"
						TitleInfo="Goals that matter"
						TextInfo="as been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book."
					/>
					<Solution
						ImgSolution="../images/visibleImg.png"
						TitleInfo="Visible achievements"
						TextInfo="Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem took a galley of type
						and scrambled it to make a type specimen book."
					/>
				</WrapperSolutions>
			</WrapperBottomSections>
		);
	}
}

export default BottomSection;
