// middleware.js
import { NextResponse } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

const locales = ["en", "ko"];
const defaultLocale = "en";

function getLocale(request) {
  const negotiatorHeaders = {};
  request.headers.forEach((value, key) => {
    negotiatorHeaders[key] = value;
  });

  const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  return matchLocale(languages, locales, defaultLocale);
}

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // 이미 locale이 있으면 그대로
  if (locales.some((loc) => pathname.startsWith(`/${loc}`))) {
    return NextResponse.next();
  }

  // locale prefix가 없으면 리디렉션
  const locale = getLocale(request);
  return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
}

// 이 경로들만 middleware 적용
export const config = {
  matcher: ["/((?!_next|favicon.ico|api|public).*)"],
};
