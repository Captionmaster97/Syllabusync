import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "SyllabusSync — Your semester, in sync", description: "Track syllabus progress, plan study goals and stay in sync with your semester." };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
