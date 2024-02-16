/**
 * Configuración de tipos de i18n para los idiomas
 * disponibles en el proyecto
 */
type I18nConfig = {
    readonly defaultLocale: "en"
    readonly locales: readonly ["en", "es"]
}

/**
 * Configuración de valores para i18n en base a
 * los idiomas disponibles
 */
export const i18n: I18nConfig = {
    defaultLocale: "en",
    locales: ["en", "es"],
}

/**
 * Tipos para los idiomas disponibles
 */
export type Locale = (typeof i18n)["locales"][number]
