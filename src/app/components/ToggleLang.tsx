"use client"

import { useRouter } from "next/navigation"

export default function ToggleLang() {
  const { push: changeLang } = useRouter()

  return (
    <menu className="flex w-min gap-6 rounded-md border-2 border-zinc-800 px-4 py-2 text-sm text-black dark:border-white dark:text-white">
      <button onClick={() => changeLang("/es")}>Español</button>
      <button onClick={() => changeLang("/en")}>English</button>
    </menu>
  )
}
