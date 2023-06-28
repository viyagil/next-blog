import Image from 'next/image'
import Link from 'next/link'

import { getPosts } from '@/service/posts'

export default async function PostsPage({ searchParams }: { searchParams: { [key: string]: string } }) {
  const products = await getPosts()
  const categories = products.map(({ category }) => category)
  const uniqueCategories = Array.from(new Set(categories))

  return (
    <div className="flex justify-between">
      <ul className="grid grid-cols-3 gap-3">
        {products
          .filter((item) => (searchParams?.category ? searchParams?.category === item.category : true))
          .map(({ path, title, description, date, category, img }, index) => (
            <li key={index} className="bg-white rounded text-black text-center">
              <Link href={`/posts/${path}`}>
                {img && (
                  <div className="relative h-40">
                    <Image src={img} alt={title} fill={true} />
                  </div>
                )}
                <div className="p-4 ">
                  <p className="text-right text-xs mb-1">{date}</p>
                  <p className="text-lg font-medium">{title}</p>
                  <p className="text-xs text-gray-600">{description}</p>
                  <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-400 dark:text-green-100">
                    {category}
                  </span>
                </div>
              </Link>
            </li>
          ))}
      </ul>
      <nav>
        <h2 className="text-2xl">Category</h2>
        <ul>
          <li>
            <Link href="/posts">All Posts</Link>
          </li>
          {uniqueCategories.map((category, index) => (
            <li key={index}>
              <Link href={`/posts?category=${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
