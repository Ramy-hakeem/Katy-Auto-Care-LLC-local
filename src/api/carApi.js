import { baseAPI } from "./apiSlice";

const carApi = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    addCar: builder.mutation({
      query: (body) => {
        return {
          url: "/car/add_car",
          method: "POST",
          body: body,
        };
      },
    }),

  }),

  overrideExisting: false,
});
export const { useAddCarMutation } = carApi;
export default carApi;
