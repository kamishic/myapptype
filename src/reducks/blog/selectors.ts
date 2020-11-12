import { createSelector } from "reselect";
import { appState } from "../store/initialState";

const blogSelector = (state: appState) => state.blog;

export const getBlogTitle = createSelector(
    [blogSelector],
    state => state.title
);