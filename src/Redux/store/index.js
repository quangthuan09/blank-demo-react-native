/* eslint-disable no-unused-vars */
import { applyMiddleware, compose, createStore } from "redux"
import rootReducer from "../reducers"

// eslint-disable-next-line no-undef
// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers())

export { store }
