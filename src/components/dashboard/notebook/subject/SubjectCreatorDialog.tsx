"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useSubjectStore } from "@/hooks/useSubjectStore"
import { CardContent } from "@/components/ui/card"

interface Props {
  onCreate: (newValue: string) => void
  onClose: () => void
}

export function SubjectCreatorDialog({ onCreate, onClose }: Props) {
  const [input, setInput] = useState("")
  const { addSubject, subjects } = useSubjectStore()

  function handleCreate() {
    const label = input.trim()
    if (!label) return

    const value = label.toLowerCase().replace(/\s+/g, "-")
    const exists = subjects.some((s) => s.value === value)

    if (!exists) {
      const newSubject = { label, value }
      addSubject(newSubject)
      onCreate(value)
    }

    setInput("")
    onClose()
  }

  return (
    <CardContent className="space-y-4">
      <Input
        placeholder="Nome da nova matéria"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-zinc-800 text-white"
      />
      <div className="flex justify-end gap-2">
        <Button variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button onClick={handleCreate}>
          Criar Matéria
        </Button>
      </div>
    </CardContent>
  )
}
