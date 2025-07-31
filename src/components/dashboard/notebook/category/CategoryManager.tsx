"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent } from "@/components/ui/select"
import { useCategoryStore } from "@/hooks/useCategoryStore"
import { CategorySelectItems } from "./CategorySelectItems"
import { CardAction } from "@/components/ui/card"

interface Props {
  value: string | undefined
  onChange: (val: string) => void
  onCreated?: () => void // callback para fechar o modal externamente
}

export function CategoryManager({ value, onChange, onCreated }: Props) {
  const { categories, addCategory } = useCategoryStore()
  const [newCategory, setNewCategory] = useState("")

  function handleAddCategory() {
    const label = newCategory.trim()
    if (!label) return

    const value = label.toLowerCase().replace(/\s+/g, "-")

    // Evitar duplicatas
    const exists = categories.some((c) => c.value === value)
    if (exists) return

    const category = { label, value }

    addCategory(category)
    onChange(value)
    onCreated?.()
    setNewCategory("")
  }

  return (
    <CardAction className="space-y-4">
      <div className="flex gap-2">
        <Input
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Nova categoria"
          className="bg-zinc-800 text-white"
        />
        <Button type="button" onClick={handleAddCategory}>
          Criar
        </Button>
      </div>

      <Select onValueChange={onChange} value={value}>
        <SelectTrigger className="bg-zinc-800 text-white">
          <SelectValue placeholder="Escolha a categoria" />
        </SelectTrigger>
        <SelectContent className="bg-zinc-800 text-white">
          <CategorySelectItems categories={categories} />
        </SelectContent>
      </Select>
    </CardAction>
  )
}
