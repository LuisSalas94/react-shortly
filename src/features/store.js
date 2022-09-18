import { configureStore } from "@reduxjs/toolkit";
import linkReducer from "../features/links/linkSlice";

const store = configureStore({
	reducer: {
		links: linkReducer,
	},
});

export default store;
