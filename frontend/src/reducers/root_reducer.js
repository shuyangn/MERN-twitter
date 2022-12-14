import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import tweetsReducer from "./tweets_reducer";

const RootReducer = combineReducers({
  session: sessionReducer,
  errors: errorsReducer,
  tweets: tweetsReducer,
});

export default RootReducer;