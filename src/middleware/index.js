import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

//logger middleware function
const logger = createLogger();

export default composeWithDevTools(applyMiddleware(thunk, logger));
