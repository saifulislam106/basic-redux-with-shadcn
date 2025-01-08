import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

// import  taskReducer  from "./feature/task/taskSlice";
// import  userReducer  from "./feature/user/userSilce"

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    //  CLINT STORE
    // user:userReducer,
    // todo: taskReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
// export type AppStore = typeof store
