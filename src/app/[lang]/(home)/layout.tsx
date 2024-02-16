// Next y React
import type { Metadata } from "next"
import { Inter } from "next/font/google"

// Libs
import { i18n, type Locale } from "@/libs/i18n-config"

const inter = Inter({ subsets: ["latin"] })

/**
 * Metadata para la página
 */
export const metadata: Metadata = {
  title: "Next.js with i18n",
  description: "It's a simple example of i18n in Next.js",
}

type LayoutHomeProps = Readonly<{
  children: React.ReactNode
  params: { lang: Locale }
}>

/**
 * Layout Home para la página inicial
 *
 * @param prop.children Hijos de la pagina inicial
 * @param {Locale} prop.params.lang Parametro de idioma
 *
 * @returns {JSX.Element}
 */
export default function LayoutHome({ children, params }: LayoutHomeProps): JSX.Element {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

/**
 * Función para generar los datos estáticos
 *
 * @return {Promise<{lang: Locale}[]>} Parametros de idioma estaticos
 */
export async function generateStaticParams(): Promise<{ lang: Locale }[]> {
  return i18n.locales.map((locale) => ({ lang: locale }))
}
