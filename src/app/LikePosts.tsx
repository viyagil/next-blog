import LikePostItem from '@/app/LikePostItem'
import { getPosts } from '@/service/posts'

export default async function LikePosts() {
  const posts = await getPosts()

  if (!posts) {
    return null
  }
  return (
    <div className="flex justify-between">
      <LikePostItem posts={posts} />
    </div>
  )
}
