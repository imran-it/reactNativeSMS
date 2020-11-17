import { createStore, applyMiddleware } from "redux";
import AsyncStorage from "@react-native-community/async-storage";

import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
//import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "../reducer";
import rootSaga from "./Sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

// configuration object for redux-persist
const PersistConfig = {
  key: "root",
  storage: AsyncStorage, // define which storage to use
};

// create a persisted reducer
const persistedReducer = persistReducer(PersistConfig, rootReducer);

const Store = createStore(persistedReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(Store); // used to create the persisted store, persistor will be used in the next step

export { Store, persistor };
