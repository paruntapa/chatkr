import { getPosts } from "@/action/post.action";
import { getDbUserId } from "@/action/user.action";
import CreatePost from "@/components/CreatePost";
import PostCard from "@/components/PostCard";
import WhotoFollow from "@/components/WhotoFollow";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser()
  const posts = await getPosts()
  const dbUserId = await getDbUserId()

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
      <div className="lg:col-span-6">
        { user ? <CreatePost/> : null}

        <div className="space-y-6">
          {posts.map((p)=>(
            <PostCard key={p.id} post={p} dbUserId={dbUserId}/>
          ))}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-4 sticky top-20">
        <WhotoFollow/>
      </div>

    </div>
  );
}
