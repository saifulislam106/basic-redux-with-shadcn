import { configureStore } from "@reduxjs/toolkit"
import  counterReducer  from "./feature/counter/counterSlice";
import  taskReducer  from "./feature/task/taskSlice";


export const store=configureStore({
    reducer:{
        counter:counterReducer,
        todo: taskReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// export type AppStore = typeof store