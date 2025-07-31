"use client"

import { SelectItem } from "@/components/ui/select"

interface Props {
  categories: {
    label: string
    value: string
  }[]
}

export function CategorySelectItems({ categories }: Props) {
  return (
    <>
      {categories.map((cat) => (
        <SelectItem key={cat.value} value={cat.value}>
          {cat.label}
        </SelectItem>
      ))}
    </>
  )
}
