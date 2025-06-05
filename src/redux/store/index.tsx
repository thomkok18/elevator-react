import {applyMiddleware, compose, createStore} from "redux";
import reducers from "../reducers/reducers";
import reduxThunk from "redux-thunk";

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Allow redux Chrome extension to be used.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Add reducers to the store and give redux Chrome extension access.
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

export default store;