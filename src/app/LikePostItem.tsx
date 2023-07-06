'use client'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-multi-carousel'

import { Post } from '@/service/posts'

import 'react-multi-carousel/lib/styles.css'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
}
export default async function LikePostItem({ posts }: { posts: Post[] }) {
  return (
    <>
      <Carousel containerClass="w-full" responsive={responsive} autoPlay={false} autoPlaySpeed={0}>
        {posts
          .filter((item) => !item.featured)
          .map(({ path, title, description, date, category, img }, index) => (
            <div key={index} className="mr-1 bg-white rounded text-black text-center">
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
            </div>
          ))}
      </Carousel>
    </>
  )
}
