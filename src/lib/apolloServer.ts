import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import fetch from "cross-fetch";

export const apolloServer = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_AEM_GRAPHQL_ENDPOINT || "http://localhost:3000/api/graphql",
    fetch,
    headers: {
      Authorization: process.env.NEXT_PUBLIC_API_TOKEN
        ? `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
        : "",
    },
  }),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: { fetchPolicy: "no-cache" },
  },
});
