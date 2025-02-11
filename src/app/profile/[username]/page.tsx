import { getProfileByUsername, getUserLikedPosts, getUserPosts, isFollowing } from "@/action/profile.action";
import { notFound } from "next/navigation";
import ProfilePageClient from "./ProfilePageClient";

interface profileProps {
  params: Promise<{ username: string }>;
}

export async function generateMetadata({ params }: profileProps) {
  const param = await params;
  const user = await getProfileByUsername(param.username);
  if (!user) return;

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio ?? `Check out ${user.username}'s profile.`,
  };
}

const ProfilePageServer = async ({ params }: profileProps) => {
  const param = await params;
  const user = await getProfileByUsername(param.username);
  if(!user) notFound();

  const [posts, likedPosts, isCurrentUserFollowing] = await Promise.all([
    getUserPosts(user.id),
    getUserLikedPosts(user.id),
    isFollowing(user.id)
  ])

  return <ProfilePageClient
  user={user}
  posts={posts}
  likedPosts={likedPosts}
  isFollowing={isCurrentUserFollowing}
  
  />
};

export default ProfilePageServer;
