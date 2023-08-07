import MyHome from "../components/landing/my-home";
import Layout from "../components/misc/layout";
import { getAllPosts } from "../lib/api";
import Post from '../interfaces/post';

export default function Home({ posts, pid, maxPid }: Props) {
  return (
    <Layout>
      <MyHome />
    </Layout>
  )
}



//horrible hack where I copied most of the code from ./posts/[pid] but hard-coded the pid as 1
type Props = {
  posts: Post[]
  pid: number
  maxPid: number
}

const pageSize = 6;
const filterPosts = (posts: any[]) => {
  return posts
    //.filter((post) => post.slug.startsWith('posts/'))
    .sort((post1, post2) => (post1.dateModified > post2.dateModified ? -1 : 1))
}
export const getStaticProps = async () => {
  let posts = await getAllPosts([
    'title',
    'dateCreated',
    'dateModified',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);
  posts = filterPosts(posts);
  const pid = 1
  const maxPid = Math.round(posts.length / pageSize)
  const start = (pid - 1) * pageSize;
  posts = posts.slice(start, start + pageSize)

  return {
    props: { posts, pid, maxPid },
  }
}
