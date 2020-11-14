import { createSelector } from "reselect";
import { appState } from "../store/initialState";


const chatsSelector = (state: appState) => state
export const getChatList = createSelector(
    [chatsSelector],
    state => state.list
)