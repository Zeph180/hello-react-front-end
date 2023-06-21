import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const apiUrl = 'http://localhost:3000/api/random_greeting';

export const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.greeting;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    randomGreeting: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomGreeting.fulfilled, (state, action) => {
      const newState = state;
      newState.randomGreeting = action.payload;
    });
  },
});

export default greetingSlice.reducer;
