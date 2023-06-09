import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// Slices
import userReducer from "./slice/userSlice";
import shoppingListSlice from "./slice/shoppingListSlice";
import showShoppingCartSlice from "./slice/showShoppingCartSlice";
import lastOrderInfoSlice from "./slice/lastOrderInfoSlice";
import previousUrlSlice from "./slice/previousUrlSlice";
import rememberUser from "./slice/rememberUser";

const rootReducer = combineReducers({
  user: userReducer,
  shoppingList: shoppingListSlice,
  showShoppingCart: showShoppingCartSlice,
  lastOrderInfo: lastOrderInfoSlice,
  previousUrl: previousUrlSlice,
  rememberUser: rememberUser,
});

const persistConfig = { key: "root", storage };

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
const persistor = persistStore(store);
export { persistor, store };
