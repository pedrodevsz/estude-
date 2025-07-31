"use client"
import { Card, CardDescription, CardSubTitle, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface NotebookCardProps {
  title: string
  noteCount: number
  onClick?: () => void
  className?: string
}

interface NotebookCardProps {
  title: string
  noteCount: number
  description?: string
  category?: string
  onClick?: () => void
  className?: string
}


export function NotebookCard({
  title,
  noteCount,
  description,
  category,
  onClick,
  className
}: NotebookCardProps) {
  return (
    <Card
      onClick={onClick}
      className={cn(
        "p-4 bg-zinc-900 border-zinc-800 rounded-xl text-white cursor-pointer hover:bg-zinc-800 transition-colors",
        className
      )}
    >
      <CardSubTitle className="font-semibold text-lg">
        <h2>{title}</h2>
      </CardSubTitle>
      <CardDescription>
        {category && <div className="text-sm font-semibold mt-1">Categoria: {category}</div>}
        {description && <div className="text-sm text-zinc-400 mt-1">{description}</div>}
      </CardDescription>
      <div className="text-xs text-zinc-600 mt-2">{noteCount} nota{noteCount !== 1 && "s"}</div>
    </Card>
  )
}
