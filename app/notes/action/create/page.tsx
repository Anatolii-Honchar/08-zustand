import css from "@/components/CreateNote/CreateNote.module.css";
import NoteForm from "@/components/NoteForm/NoteForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create note",
  description: "Page for creating a new note",
  openGraph: {
    title: "Create note",
    description: "Page for creating a new note",
    url: "/notes/action/create",
    images: [
      {
        url: "/og-create-note.png", // поклади будь-яке зображення в public
        width: 1200,
        height: 630,
        alt: "Create note page",
      },
    ],
  },
};

export default function CreateNote() {
  return (
    <main className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>Create note</h1>
        <NoteForm />
      </div>
    </main>
  );
}
