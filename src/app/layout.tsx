import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'by blog',
  description: '내 블로그 니블로그 블로블로',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen">
        <header className="flex justify-between">
          <h1>Blog</h1>
          <nav className="grid gap-4 grid-cols-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
        <footer className="mt-auto">All Right Reserved.</footer>
      </body>
    </html>
  )
}
