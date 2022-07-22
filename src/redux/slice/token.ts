import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface TokenState {
  token: string;
  type: string;
}

const initialState: TokenState = {
  token: '',
  type: 'none',
};

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: {
      reducer: (state, action: PayloadAction<TokenState>) => {
        return action.payload;
      },
      prepare: (responseToken: string) => {
        if (responseToken.includes('bearer') && responseToken.includes(' ')) {
          return {
            payload: { token: responseToken.split(' ')[1], type: 'bearer' },
          };
        } else {
          return { payload: { token: '', type: 'none' } };
        }
      },
    },
  },
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
