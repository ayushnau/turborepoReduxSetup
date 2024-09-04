import React from "react";
import { SignIn, Dashboard, Login } from "features";
import { Routes, Route } from "react-router-dom";
import { Publish, Publisher, Editor, Reviewer, Publications } from "components";

const PublicationRouter = () => {
	console.log("working");
	return (
		<Routes>
			<Route path="/publish" element={<Publish />} />
			<Route path="/publications" element={<Publications />} />
			<Route path="/publisher" element={<Publisher />} />
			<Route path="/editor" element={<Editor />} />
			<Route path="/reviewer" element={<Reviewer />} />
		</Routes>
	);
};

export default PublicationRouter;
