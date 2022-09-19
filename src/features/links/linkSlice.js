import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import linkAPI from "../../common/apis/linkAPI";

//Link Shortener API
export const fetchAsyncLinks = createAsyncThunk(
	"links/fetchAsyncLinks",
	async (term) => {
		const response = await linkAPI.get(term);
		return response.data;
	}
);

//Initial State
const initialState = {
	links: {},
};

//Link Slice
const linkSlice = createSlice({
	name: "links",
	initialState,
	reducers: {
		removeFromState: (state, { payload }) => {
			state.links = {};
		},
	},
	extraReducers: {
		[fetchAsyncLinks.fulfilled]: (state, { payload }) => {
			console.log("Successfully fetched links", payload);
			return {
				...state,
				links: payload,
			};
		},
	},
});

export const { addLinks, removeFromState } = linkSlice.actions;
export default linkSlice.reducer;
