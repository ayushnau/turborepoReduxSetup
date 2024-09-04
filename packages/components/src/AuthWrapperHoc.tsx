import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreState } from "store";
import { useNavigate } from "react-router-dom";

const AuthWrapperHoc: React.FC<{ children: any }> = ({ children }) => {
	const accessToken = useSelector(
		(state: any) => state?.publicationUserSlice?.access_token,
	);

	console.log({ accessToken });
	const navigate = useNavigate();
	// if (!accessToken) {
	// 	console.log("first>>");
	// 	return <Navigate to="/" />;
	// 	// navigate("/");
	// }

	useEffect(() => {
		if (!accessToken) {
			navigate("/");
		}
	}, [accessToken, navigate]);

	return children;
};

export default AuthWrapperHoc;
