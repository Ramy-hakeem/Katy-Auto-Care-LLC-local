import { baseAPI } from "./apiSlice";

const authApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => {
        return {
          url: "/customer/login",
          method: "POST",
          body: body,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
export default authApi;
