// Libs
import { getDictionary } from "@/libs/get-dictionary"
import { Locale } from "@/libs/i18n-config"

type PageHomeProps = Readonly<{
  params: {
    lang: Locale
  }
}>

/**
 * Contenido inicial
 *
 * @param {Locale} prop.params.lang Parametro de idioma
 *
 * @returns {Promise<JSX.Element>} Contenido de la pagina inicial
 */
export default async function PageHome({ params }: PageHomeProps): Promise<JSX.Element> {
  const dictionary = await getDictionary(params.lang)

  return (
    <main className="flex h-screen w-screen items-center justify-center overflow-y-auto bg-white">
      {dictionary["server-component"].welcome}
    </main>
  )
}
