import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const uesrSlice = createSlice({
  name: 'authUser',
  initialState: {
    authUser: '',
  },
  reducers: {
    setAuthUser(state, action: PayloadAction<string>) {
      state.authUser = action.payload;
    },
  },
});
export const {setAuthUser} = uesrSlice.actions;
export default uesrSlice.reducer;
