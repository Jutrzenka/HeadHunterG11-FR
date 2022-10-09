import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  id: string | null;
  login: string | null;
  role: string | null;
}

const initialState: UserState = {
  id: null,
  login: null,
  role: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: {
      reducer: (state, action: PayloadAction<UserState>) => {
        return action.payload;
      },
      prepare: (value: UserState) => {
        if (value) {
          const {id, login, role} = value;
          return { payload: { id, login, role} };
        } else {
          return { payload: { id: null, login: null, role: null}, };
        }
      },
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
