"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useNotebookStore } from "@/hooks/useNotebookStore"
import { useCategoryStore } from "@/hooks/useCategoryStore"
import { notebookSchema } from "./notebookSchema"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form, FormField, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
} from "@/components/ui/select"
import { CategorySelectItems } from "./category/CategorySelectItems"
import { CategoryCreatorDialog } from "./category/CategoryCreatorDialog"
import { PlusIcon } from "lucide-react"
import { SubjectSelectItems } from "./subject/SubjectSelectItems"
import { useSubjectStore } from "@/hooks/useSubjectStore"
import { SubjectCreatorDialog } from "./subject/SubjectCreatorDialog"
import { CardSubTitle } from "@/components/ui/card"

export function NotebookCreator() {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [subjectDialogOpen, setSubjectDialogOpen] = useState(false)
  const { categories } = useCategoryStore()
  const addNotebook = useNotebookStore((s) => s.addNotebook)

  const form = useForm<z.infer<typeof notebookSchema>>({
    resolver: zodResolver(notebookSchema),
    defaultValues: {
      title: "",
      description: "",
      category: "",
    },
  })

  function onSubmit(values: z.infer<typeof notebookSchema>) {
    addNotebook(values)
    form.reset()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4 max-w-[30%] w-[30%]">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <div>
              <FormLabel className="text-white flex justify-between items-center">
                Matéria
                <AlertDialog open={subjectDialogOpen} onOpenChange={setSubjectDialogOpen}>
                  <AlertDialogTrigger asChild>
                    <Button size="icon" variant="outline" className="btn-plus">
                      <PlusIcon size={16} />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-zinc-900 text-white">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Criar nova matéria</AlertDialogTitle>
                    </AlertDialogHeader>
                    <SubjectCreatorDialog
                      onCreate={(newValue) => field.onChange(newValue)}
                      onClose={() => setSubjectDialogOpen(false)}
                    />
                  </AlertDialogContent>
                </AlertDialog>
              </FormLabel>

              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="bg-zinc-800 text-white">
                    <SelectValue placeholder="Escolha a matéria" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 text-white">
                    <SubjectSelectItems subjects={useSubjectStore().subjects} />
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </div>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <div>
              <FormLabel className="text-white">Descrição</FormLabel>
              <FormControl>
                <Textarea className="bg-zinc-800 text-white" {...field} placeholder="A descrição é opcional" />
              </FormControl>
              <FormMessage />
            </div>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <div>
              <FormLabel className="text-white flex justify-between items-center">
                Categoria
                <AlertDialog open={dialogOpen} onOpenChange={setDialogOpen}>
                  <AlertDialogTrigger asChild>
                    <Button size="icon" variant="outline" className="btn-plus">
                      <PlusIcon size={16} />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-zinc-900 text-white">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Criar nova categoria</AlertDialogTitle>
                    </AlertDialogHeader>
                    <CategoryCreatorDialog
                      onCreate={(newValue) => field.onChange(newValue)}
                      onClose={() => setDialogOpen(false)}
                    />
                  </AlertDialogContent>
                </AlertDialog>
              </FormLabel>

              <FormControl>
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="bg-zinc-800 text-white">
                    <SelectValue placeholder="Escolha a categoria" />
                  </SelectTrigger>
                  <SelectContent className="bg-zinc-800 text-white">
                    <CategorySelectItems categories={categories} />
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </div>
          )}
        />

        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          Criar Caderno
        </Button>
      </form>
    </Form>
  )
}
