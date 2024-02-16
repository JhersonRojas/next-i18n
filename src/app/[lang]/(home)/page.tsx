// Libs
import { getDictionary } from "@/libs/get-dictionary"
import { Locale } from "@/libs/i18n-config"

// Components
import { ToggleTheme } from "@/app/components/ToggleTheme"
import ToggleLang from "@/app/components/ToggleLang"

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
  const dictionary = (await getDictionary(params.lang))["server-component"]

  return (
    <main className="h-screen w-screen overflow-y-auto bg-white px-6 dark:bg-zinc-800 sm:px-0">
      <header className="my-12 w-full text-4xl font-bold text-black dark:text-white sm:mx-auto sm:w-[70vw] sm:text-5xl lg:text-6xl">
        <h1>{dictionary.header.title}</h1>
      </header>

      <nav className="flex w-full justify-between sm:mx-auto sm:w-[70vw]">
        <ToggleLang />
        <ToggleTheme />
      </nav>

      <article className="my-6 text-black dark:text-white sm:mx-auto sm:w-[70vw]">
        <h2 className="mb-2 text-xl font-bold">{dictionary["article.one"].title}</h2>
        <p>{dictionary["article.one"].content}</p>
      </article>

      <article className="my-6 text-black dark:text-white sm:mx-auto sm:w-[70vw]">
        <h2 className="mb-2 text-xl font-bold">{dictionary["article.two"].title}</h2>

        <section>
          {dictionary["article.two"].content.map((content, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-gray-600 dark:text-gray-300">{index + 1}.</span>{" "}
              <p>
                <strong>{content.summary}: </strong>
                {content.details}
              </p>
            </li>
          ))}
        </section>
      </article>

      <article className="my-6 text-black dark:text-white sm:mx-auto sm:w-[70vw]">
        <h2 className="mb-2 text-xl font-bold">{dictionary["article.three"].title}</h2>
        <section>
          <ul>
            {dictionary["article.three"].content.map((content, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-gray-600 dark:text-gray-300">{index + 1}.</span>{" "}
                <p>
                  <strong>{content.summary}: </strong>
                  {content.details}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <article className="my-6 text-black dark:text-white sm:mx-auto sm:w-[70vw]">
        <h2 className="mb-2 text-xl font-bold">{dictionary["article.four"].title}</h2>
        <section>
          <ul>
            {dictionary["article.four"].content.map((content, index) => (
              <li key={index} className="flex gap-2">
                <span className="text-gray-600 dark:text-gray-300">{index + 1}.</span>{" "}
                <p>
                  <strong>{content.summary}: </strong>
                  {content.details}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <article className="mb-12 mt-6 text-black dark:text-white sm:mx-auto sm:w-[70vw]">
        <h2 className="mb-2 text-xl font-bold">{dictionary["article.five"].title}</h2>
        <p>{dictionary["article.five"].content}</p>
      </article>
    </main>
  )
}
