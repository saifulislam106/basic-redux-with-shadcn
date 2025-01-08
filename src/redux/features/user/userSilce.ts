
// LOCAL STORE 

// import { RootState } from "@/redux/store";
// import { IUser } from "@/types/taskTypes";
// import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

// interface InitialState {
//   users: IUser[];

// }

// type DraftUser = Pick<IUser, "name">;

// const createUser = (userData: DraftUser): IUser => {
//   return { id: nanoid(), ...userData };
// };

// const initialState: InitialState = {
//   users: [],
 
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     addUser: (state, action: PayloadAction<IUser>) => {
//       const userData = createUser(action.payload);
//       state.users.push(userData);
//     },

//     removeUser: (state, action: PayloadAction<string>) => {
//       state.users = state.users.filter((user) => user.id !== action.payload);
//     },
//   },
// });

// export const selectUser = (state: RootState) => state.user.users


// export const {addUser,removeUser } =
//   userSlice.actions;

// export default userSlice.reducer;
