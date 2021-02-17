import { combineReducers } from "redux";
import trackReducer from "./trackReducer";
import trackDataReducer from "./trackDataReducer";
import widgetInfoReducer from "./widgetInfoReducer";

const rootReducer = combineReducers({
  tracks: trackReducer,
  track: trackDataReducer,
  widget: widgetInfoReducer,
});

export default rootReducer;
