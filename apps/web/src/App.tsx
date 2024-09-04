import React from "react";
import { Dashboard } from "features";

import { Routes, Route } from "react-router-dom";
const App = () => {
	return (
		// <AuthWrapperHoc>
		<Routes>
			<Route path="/" element={<Dashboard />} />
		</Routes>
		// </AuthWrapperHoc>
	);
};

export default App;
