import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./features/store";
import { Provider } from "react-redux";
//Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ToastContainer />
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
