"use client"

import { useEffect, useRef, useState } from "react"

export default function YampiBuyButton() {
  const mountRef = useRef<HTMLDivElement | null>(null)
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!mountRef.current) return

    // Limpa scripts anteriores ao navegar pelo app router
    mountRef.current.querySelectorAll("script.ymp-script").forEach((el) => el.remove())

    // Cria o script exatamente no local onde o botão deve renderizar
    const s = document.createElement("script")
    s.className = "ymp-script"
    s.src = "https://api.yampi.io/v2/auramar2/public/buy-button/21K7IUQCCC/js"
    s.async = true
    s.onload = () => setLoaded(true)
    s.onerror = () => setError("Falha ao carregar o botão. Tente recarregar a página.")

    mountRef.current.appendChild(s)

    return () => {
      s.remove()
    }
  }, [])

  return (
    <div className="w-full flex items-center justify-center">
      <div
        ref={mountRef}
        className="min-h-10"
        style={{ minHeight: 44 }} // garante área clicável enquanto carrega
      />
      {!loaded && !error && (
        <button type="button" className="ml-2 rounded-2xl px-4 py-2 text-sm border" aria-disabled="true">
          Carregando botão…
        </button>
      )}
      {error && <p className="text-red-600 text-sm ml-2">{error}</p>}
    </div>
  )
}
