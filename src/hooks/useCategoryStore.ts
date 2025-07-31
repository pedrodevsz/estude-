import { create } from "zustand"

interface Category {
  label: string
  value: string
}

interface CategoryStore {
  categories: Category[]
  addCategory: (category: Category) => void
}

export const useCategoryStore = create<CategoryStore>((set) => ({
  categories: [],
  addCategory: (category) =>
    set((state) => ({
      categories: [...state.categories, category],
    })),
}))
