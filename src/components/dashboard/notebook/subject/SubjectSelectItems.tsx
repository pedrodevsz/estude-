"use client"

import { SelectItem } from "@/components/ui/select"

interface Props {
  subjects: {
    label: string
    value: string
  }[]
}

export function SubjectSelectItems({ subjects }: Props) {
  return (
    <>
      {subjects.map((subject) => (
        <SelectItem key={subject.value} value={subject.value}>
          {subject.label}
        </SelectItem>
      ))}
    </>
  )
}
