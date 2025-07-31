"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useCategoryStore } from "@/hooks/useCategoryStore"

interface Props {
  onCreate: (newValue: string) => void // atualiza o select no formulário
  onClose: () => void // fecha o modal
}

export function CategoryCreatorDialog({ onCreate, onClose }: Props) {
  const [input, setInput] = useState("")
  const { addCategory, categories } = useCategoryStore()

  function handleCreate() {
    const label = input.trim()
    if (!label) return

    const value = label.toLowerCase().replace(/\s+/g, "-")
    const exists = categories.some((c) => c.value === value)

    if (!exists) {
      const newCategory = { label, value }
      addCategory(newCategory)
      onCreate(value)
    }

    setInput("")
    onClose()
  }

  return (
    <div className="space-y-4">
      <Input
        placeholder="Nome da nova categoria"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-zinc-800 text-white"
      />
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button onClick={handleCreate}>
          Criar Categoria
        </Button>
      </div>
    </div>
  )
}
