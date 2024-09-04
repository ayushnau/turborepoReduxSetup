import axios from "axios";
import { webStore } from "../store/store";

let axiosInstance = axios.create();

axiosInstance.defaults.baseURL =
process.env.VITE_PUBLIC_API_URL;
// ||	import.meta.env.VITE_PUBLIC_API_URL 

axiosInstance.defaults.headers.common = {
	"Content-Type": "application/json",
	Accept: "application/json",
};

axiosInstance.interceptors.request.use(
	async function (config) {
		// config.headers["Authorization"] = `Bearer ${
		// 	webStore.getState().user.form.access_token
		// }`;

		return config;
	},
	function (error) {
		return Promise.reject(error);
	},
);

axiosInstance.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		return Promise.reject(error);
	},
);

export default axiosInstance;
