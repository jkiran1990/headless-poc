import { http, HttpResponse } from "msw";
import GetHeroBannerMock from "../graphql/GetHeroBanner.mock.json";

export const graphqlClient = [
  http.post("/graphql", async ({ request }) => {
    const { query } = await request.json();

    if (query.includes("GetHeroBanner")) {
      return HttpResponse.json({
        data: GetHeroBannerMock,
      });
    }

    return HttpResponse.json({ data: {} });
  }),
];
