// Next y React
import { NextResponse, type NextRequest } from "next/server"

// Libs
import { getLocale } from "@/libs/get-dictionary"
import { i18n } from "@/libs/i18n-config"

/**
 * Configuración del matcher para inspeccionar las rutas
 */
export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

/**
 * Middleware global del proyecto
 *
 * @param {NextRequest} request Contenido de la petición
 */
export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Verifica si la ruta tiene algún idioma soportado
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )

    // Redirecciona si el idioma no es detectado
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request)

        // e.g. Si la ruta es /products
        // La nueva ruta sera /es-ES/products
        return NextResponse.redirect(
            new URL(
                `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
                request.url
            )
        )
    }
}
