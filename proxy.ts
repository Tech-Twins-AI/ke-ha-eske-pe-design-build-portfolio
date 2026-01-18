import { type NextRequest, NextResponse } from "next/server";
import { languageIds } from "./sanity/lib/languages";

const DEFAULT_LANGUAGE = "en";

export function proxy(request: NextRequest) {
	const { pathname } = request.nextUrl;

	// Skip language routing for these paths
	if (
		pathname.startsWith("/studio") ||
		pathname.startsWith("/api") ||
		pathname.startsWith("/_next") ||
		pathname.startsWith("/favicon") ||
		pathname.includes(".") // Static files
	) {
		return NextResponse.next();
	}

	// Check if the pathname already has a valid language prefix
	const pathnameSegments = pathname.split("/").filter(Boolean);
	const firstSegment = pathnameSegments[0];

	// If the first segment is a valid language, continue
	if (firstSegment && languageIds.includes(firstSegment)) {
		return NextResponse.next();
	}

	// Redirect to the default language
	const newUrl = request.nextUrl.clone();
	newUrl.pathname = `/${DEFAULT_LANGUAGE}${pathname}`;

	return NextResponse.redirect(newUrl);
}

// Configure which paths the proxy should run on
export const config = {
	matcher: [
		// Match all paths except static files and api routes
		"/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|otf)).*)",
	],
};
