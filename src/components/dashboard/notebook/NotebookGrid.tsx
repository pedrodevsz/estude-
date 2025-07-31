"use client"

import { CardContent, CardSubTitle } from "@/components/ui/card"
import { NotebookCard } from "./NotebookCard"
import { NotebookCreator } from "./NotebookCreator"
import { useNotebookStore } from "@/hooks/useNotebookStore"

export function NotebookGrid() {
  const notebooks = useNotebookStore((s) => s.notebooks)

  return (
    <CardContent className="flex flex-col gap-4 bg-zinc-950 mx-6 rounded-2xl shadow-xl">
      <div className="flex flex-col gap-2">
        <CardSubTitle className="pt-4">
          Criar caderno
        </CardSubTitle>
        <NotebookCreator />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {notebooks.map((nb, i) => (
          <NotebookCard
            key={i}
            title={nb.title}
            noteCount={0}
            description={nb.description}
            category={nb.category}
          />
        ))}
      </div>
    </CardContent>
  )
}
