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
        <div className="container mx-auto">
          <header className="flex justify-between mb-10">
            <h1>Blog</h1>
            <nav className="grid gap-4 grid-cols-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/FeaturedPosts">Posts</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </header>
          {children}
        </div>
        <footer className="mt-auto text-center pt-4">All Right Reserved.</footer>
      </body>
    </html>
  )
}
