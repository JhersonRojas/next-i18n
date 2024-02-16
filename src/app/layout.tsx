// styles
import "@/styles/globals.css"

type LayoutRootProps = Readonly<{
  children: React.ReactNode
}>

/**
 * Layout Root para toda la página
 *
 * @param prop.children Hijos que se cargaran en la pagina
 *
 * @returns {JSX.Element}
 */
export default function LayoutRoot({ children }: LayoutRootProps): JSX.Element {
  return <>{children}</>
}
