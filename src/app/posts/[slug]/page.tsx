import Image from 'next/image'
import Link from 'next/link'

import Markdown from '@/app/posts/[slug]/Markdown'
import { getPost } from '@/service/posts'

type Props = {
  params: {
    slug: string
  }
}

export default async function PostPage({ params: { slug } }: Props) {
  const product = await getPost(slug)
  if (!product) {
    return null
  }
  const { title, description, date, content = '', img, prevContent, nextContent } = product
  return (
    <div>
      {img && (
        <div className="relative h-96">
          <Image src={img} alt={title} fill={true} />
        </div>
      )}
      <p className="text-right">{date}</p>
      <p className="text-lg font-medium">{title}</p>
      <p className="text-xs text-gray-200">{description}</p>
      <Markdown content={content} />

      <div className="flex mt-5">
        {prevContent && (
          <Link
            className="flex-1 p-4 text-center"
            href={prevContent.path}
            style={{ background: `url(${prevContent.img}) no-repeat 50% 50% /100% auto` }}>
            <p className="text-lg font-medium">{prevContent.title}</p>
            <p className="text-xs text-gray-200">{prevContent.description}</p>
          </Link>
        )}
        {nextContent && (
          <Link
            className="flex-1 p-4 text-center"
            href={nextContent.path}
            style={{ background: `url(${nextContent.img}) no-repeat 50% 50% /100% auto` }}>
            <p className="text-lg font-medium">{nextContent.title}</p>
            <p className="text-xs text-gray-200">{nextContent.description}</p>
          </Link>
        )}
      </div>
    </div>
  )
}
