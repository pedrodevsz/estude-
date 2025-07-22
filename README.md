# 📚 Estude+ – Plataforma de Estudos com IA

Estude+ é uma plataforma moderna de aprendizado que une anotações em Markdown, flashcards inteligentes e quizzes interativos — tudo com auxílio de inteligência artificial. Ideal para estudantes, autodidatas e criadores de conteúdo.

---

## 🚀 Tech Stack

### Frontend
- ⚛️ [Next.js](https://nextjs.org/) (App Router)
- 🎨 [TailwindCSS](https://tailwindcss.com/) + [Shadcn/UI](https://ui.shadcn.com/)
- 💡 [Zustand](https://zustand-demo.pmnd.rs/) (estado global)
- 📝 Markdown Editor (`@uiw/react-md-editor`)
- 🌗 Tema claro/escuro com `tailwind dark:`

### Backend (planejado)
- ☕ Java com Spring Boot
- 🧠 Integração com OpenAI API ou HuggingFace (quizzes e resumos automáticos)
- 📦 Banco: PostgreSQL / Supabase / MongoDB / mysql (ainda pesquisando)

---

## ✨ Funcionalidades

- ✅ Criar anotações com Markdown
- 🧠 Gerar **flashcards** a partir das notas
- ❓ Criar **quizzes interativos** automaticamente
- 🔖 Organizar conteúdos por tags e cadernos
- 🔁 Sistema de repetição espaçada (em breve)
- 💾 Exportar notas como PDF
- 🔐 Autenticação com NextAuth (GitHub, Google)

---

## 🖼️ Screenshots

![Home](./public/demo/homepage.png)
> Landing Page moderna e responsiva

![Editor](./public/demo/editor.png)
> Editor de anotações com preview Markdown

---

## 💡 Contribuição

Contribuições são muito bem-vindas! Sinta-se à vontade para abrir issues ou pull requests com melhorias, ideias ou correções.

---

## 🛠️ Instalação local

1. **Clone o projeto**
```bash
git clone https://github.com/seunome/estudo-plus.git
cd estudo-plus
```

2. **Instale as deps**
```bash
npm install
```

3. **Configure as vars ambiente (exemplo)**
```bash
  NEXTAUTH_SECRET=suasecret
  NEXTAUTH_URL=http://localhost:3000

# Integração com OpenAI (opcional)
  OPENAI_API_KEY=sk-...

```

4. **Inicie o projeto**
```
npm run dev
```
