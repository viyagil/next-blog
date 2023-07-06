import FeaturedPosts from '@/app/FeaturedPosts'
import LikePosts from '@/app/LikePosts'

export default function Home() {
  return (
    <main className="p-4">
      <div className="text-center mb-10">
        <h1 className="text-6xl font-bold">👋🏻 Hello, World!</h1>
        <p className="text-2xl">Welcome to my blog!</p>
      </div>
      <h2 className="text-3xl mb-2">Featured Posts</h2>
      <FeaturedPosts />
      <h2 className="text-3xl mt-4 mb-2">You may like</h2>
      <LikePosts />
    </main>
  )
}
