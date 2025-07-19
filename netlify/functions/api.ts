import serverless from "serverless-http";
import app from "../../apps/api/index";

export const handler = serverless(app);
