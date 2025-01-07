import { configureStore } from "@reduxjs/toolkit"

import  taskReducer  from "./feature/task/taskSlice";
import  userReducer  from "./feature/user/userSilce"


export const store=configureStore({
    reducer:{
        user:userReducer,
        todo: taskReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// export type AppStore = typeof store