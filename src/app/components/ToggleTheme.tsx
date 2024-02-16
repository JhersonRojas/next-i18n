"use client"

// Packages
import { useTheme } from "next-themes"

// Componentes
import { IconMoon, IconSun, IconSystem } from "./Icons"

/**
 * Boton para cambiar el tema de la página
 *
 * @returns {JSX.Element} Elemento para cambiar el tema
 */
export function ToggleTheme(): JSX.Element {
  const { setTheme: chageTheme } = useTheme()

  return (
    <menu className="flex w-min gap-6 rounded-md border-2 border-zinc-800 px-4 py-2 text-sm text-black dark:border-white dark:text-white">
      <button onClick={() => chageTheme("light")}>
        <IconSun />
      </button>
      <button onClick={() => chageTheme("dark")}>
        <IconMoon />
      </button>
      <button onClick={() => chageTheme("system")}>
        <IconSystem />
      </button>
    </menu>
  )
}
