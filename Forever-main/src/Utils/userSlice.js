import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: null, // Represents the logged-in user, null when no user is logged in
  },
  reducers: {
    addUser: (state, action) => {
      state.users = action.payload; // Set the user details
    },
    removeUser: (state) => {
      state.users = null; // Clear the user details
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
