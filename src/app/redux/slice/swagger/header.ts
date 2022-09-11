import { createSlice } from "@reduxjs/toolkit";
import { Header } from "../../../types/header";

const initialState: Header = {
  title: "",
  baseUrl: "",
  version: "",
  description: "",
  servers: [{ id: 1, url: "" }],
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setHeaderDeatils: (state, action) => {
      const {title, baseUrl, version, description} = action.payload.header
      state.title = title
      state.baseUrl = baseUrl
      state.version = version
      state.description = description
    },
     
    setServers: (state, action) => {
      state.servers = action.payload.servers
    }
  },
});

export const HeaderReducer = headerSlice.reducer;
export const {setHeaderDeatils} = headerSlice.actions;
