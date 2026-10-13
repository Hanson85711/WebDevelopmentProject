import { PostList } from './components/PostList.jsx'
const posts = [
  {
    title: 'Full-Stack React Projects',
    contents: "Let's become full-stack developers!",
    author: 'Daniel Bugl',
  },
  { title: 'Hello React!' },
  {
    title: 'This is my new post',
    contents: 'This is the content of my new post.',
    author: 'Hanson Lee',
  }
]
export function App() {
  return <PostList posts={posts} />
}

