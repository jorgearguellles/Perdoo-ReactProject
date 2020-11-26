import React from "react";
import Header from "../../components/Header";
import MiddleSection from "../../components/MiddleSection";
import BottomSection from "../../components/BottomSection";

class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<MiddleSection />
				<BottomSection />
			</div>
		);
	}
}

export default Home;
