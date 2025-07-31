import { create } from "zustand"

interface Subject {
  label: string
  value: string
}

interface SubjectStore {
  subjects: Subject[]
  addSubject: (subject: Subject) => void
}

export const useSubjectStore = create<SubjectStore>((set) => ({
  subjects: [],
  addSubject: (subject) =>
    set((state) => ({
      subjects: [...state.subjects, subject],
    })),
}))
