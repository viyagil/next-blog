import Image from 'next/image'
import Link from 'next/link'

import { getPosts } from '@/service/posts'

export default async function FeaturedPosts() {
  const posts = await getPosts()

  return (
    <div className="flex justify-between">
      <ul className="grid grid-cols-3 gap-3">
        {posts
          .filter((item) => item.featured)
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
    </div>
  )
}
