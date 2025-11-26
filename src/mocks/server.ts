import { setupServer } from "msw/node";
import { graphqlServer } from "./handlers/graphqlServer";
import { restServer } from "./handlers/restServer";

export const server = setupServer(...graphqlServer,...restServer);
