import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './GreetingSlice';

export default configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});
