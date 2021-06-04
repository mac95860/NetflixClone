import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/userSlice';
import userReducer from "../features/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
