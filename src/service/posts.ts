import { promises as fs } from 'fs'
import path from 'path'

export type Post = {
  title: string
  description: string
  date: string
  category: string
  path: string
  featured: boolean
  content?: string
  img?: string
  prevContent?: Post
  nextContent?: Post
}

export async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), 'data', 'posts.json')
  const data = await fs.readFile(filePath, 'utf-8')

  return JSON.parse(data).map((item: Post) => ({ ...item, img: `/images/posts/${item.path}.png` }))
}

export async function getPost(slug: string): Promise<Post | undefined> {
  const filePath = path.join(process.cwd(), 'data', 'posts', `${slug}.md`)
  const content = await fs.readFile(filePath, 'utf-8')
  const products = await getPosts()
  const data = products.find((item) => item.path === slug)
  const dataIndex = products.findIndex((item) => item.path === slug)
  const prevContent = dataIndex ? products[dataIndex - 1] : undefined
  const nextContent = dataIndex !== products.length ? products[dataIndex + 1] : undefined

  return data ? { ...data, content, prevContent, nextContent } : undefined
}
