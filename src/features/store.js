import { configureStore } from "@reduxjs/toolkit";
import linkReducer from "../features/links/linkSlice";
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "persist-link-app",
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, linkReducer);
const store = configureStore({
	reducer: {
		links: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

export default store;
