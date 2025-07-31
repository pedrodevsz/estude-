import { create } from "zustand"

interface Notebook {
  title: string
  description?: string
  category?: string
}

interface NotebookStore {
  notebooks: Notebook[]
  addNotebook: (notebook: Notebook) => void
  removeNotebook: (title: string) => void
}

export const useNotebookStore = create<NotebookStore>((set) => ({
  notebooks: [],
  addNotebook: (notebook) =>
    set((state) => ({
      notebooks: [...state.notebooks, notebook],
    })),
  removeNotebook: (title) =>
    set((state) => ({
      notebooks: state.notebooks.filter((nb) => nb.title !== title),
    })),
}))
