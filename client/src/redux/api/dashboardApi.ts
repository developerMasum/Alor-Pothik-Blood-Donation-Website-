import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta } from "@/types";
// import { TAdmin } from "@/types/admin";

export const dashboardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDashboardData: build.query({
      query: () => ({
        url: "/dashboard/count",
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
    getMonthlyData: build.query({
      query: () => ({
        url: "/dashboard/count-monthly",
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
    getMeritWiseDonner: build.query({
      query: () => ({
        url: "/dashboard/donor-merit-wise",
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
    getBestDonnersWithTimeOfDonations: build.query({
      query: () => ({
        url: "/dashboard/donations-time",
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
    gestBestDonners: build.query({
      query: () => ({
        url: "/dashboard/best-donors",
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
  }),
});

export const {
  useGetDashboardDataQuery,
  useGetMonthlyDataQuery,
  useGetMeritWiseDonnerQuery,
  useGetBestDonnersWithTimeOfDonationsQuery,
  useGestBestDonnersQuery,
} = dashboardApi;
