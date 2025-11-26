"use client";

import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";
import fetch from "cross-fetch";

const httpLink = new HttpLink({
  uri: "/api/graphql", // intercepted by MSW in dev
  fetch,
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get("auth_token");
  return { headers: { ...headers, Authorization: token ? `Bearer ${token}` : "" } };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
