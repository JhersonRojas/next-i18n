// Next y React
import { NextRequest } from "next/server"

// Packages
import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

// Libs
import { i18n, type Locale } from "./i18n-config"

/**
 * Diccionarios de idiomas disponibles
 */
const dictionarys = {
    en: () => import("../utils/langs/en.json").then((module) => module.default),
    es: () => import("../utils/langs/es.json").then((module) => module.default),
}

/**
 * Metodo para obtener el diccionario del idioma
 *
 * @param locale Referencia del diccionario del idioma solicitado
 */
export async function getDictionary(locale: Locale) {
    return dictionarys[locale]?.() ?? dictionarys.es()
}

export function getLocale(request: NextRequest): string | undefined {
    // El negociador espera un objeto simple por lo que necesitamos transformar los encabezados
    const negotiatorHeaders: Record<string, string> = {}
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

    const locales: string[] = i18n.locales as unknown as string[]

    // Usa negociador e intl-localematcher para obtener la mejor configuración regional
    let languages = new Negotiator({ headers: negotiatorHeaders }).languages(locales)

    const locale = matchLocale(languages, locales, i18n.defaultLocale)

    return locale
}
