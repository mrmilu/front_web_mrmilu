import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { stringify } from "query-string";

const PUBLIC_FILE = /\.(.*)$/;

export interface NextMiddlewareGateOptions {
  apiPaths?: Array<string>;
  queryParams?: Record<string, unknown>;
}

export const middlewareGate = (
  req: NextRequest,
  next: boolean,
  redirectTo = "/404",
  options: NextMiddlewareGateOptions = { apiPaths: ["graphql", "rest"] }
) => {
  const { name } = req.page;

  const notApi = options?.apiPaths.some((path) => !req.nextUrl.pathname.includes(path));
  const notPublicFile = !PUBLIC_FILE.test(req.nextUrl.pathname);
  if (notPublicFile && notApi && name) {
    if (next) {
      return NextResponse.next();
    } else {
      const url = req.nextUrl.clone();
      url.pathname = redirectTo;
      if (options?.queryParams) url.search = stringify(options?.queryParams);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
};
