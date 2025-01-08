import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes:["task"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      providesTags:["task"],
      query: () => "/tasks",
    }),
    createTasks: builder.mutation({
      invalidatesTags:["task"],
      query: (taskData) => ({
        url:"/tasks",
        method:"POST",
        body:taskData
      }),
    }),
  }),
});

export const {useGetTasksQuery,useCreateTasksMutation}= baseApi