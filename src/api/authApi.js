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
    getUserData: builder.query({
      query: (id) => {
        return {
          url: `customer/get_customer/${id}`,
        };
      },
    }),
    createNewAccount: builder.mutation({
      query: (body) => {
        return {
          url: "customer/register",
          method: "POST",
          body: body,
        };
      },
    }),
  }),

  overrideExisting: false,
});

export const {
  useLoginMutation,
  useGetUserDataQuery,
  useLazyGetUserDataQuery,
  useCreateNewAccountMutation,
} = authApi;
export default authApi;
