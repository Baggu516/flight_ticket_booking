import { createStore } from "redux";
import ticketReducer from "./reducer/ticketReducer";

export const store=createStore(ticketReducer)