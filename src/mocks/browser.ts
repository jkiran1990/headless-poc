import { setupWorker } from "msw/browser";
import { restClient } from "./handlers/restClient";
import { graphqlClient } from "./handlers/graphqlClient";

export const worker = setupWorker(...restClient,...graphqlClient);
