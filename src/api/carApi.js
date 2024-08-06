import { baseAPI } from "./apiSlice";

const carApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    addCar: builder.mutation({
      query: (body) => {
        return {
          url: "",
          method: "",
          body: body,
        };
      },
    }),
  }),
});

export const { useAddCarMutation } = carApi;
export default carApi;
