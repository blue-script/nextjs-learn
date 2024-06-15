import Link from 'next/link'

export type PostType = {
  'userId': number
  'id': number
  'title': string
  'body': string
}

type Props =  {
  post: PostType
}

const Post = ({post}: Props) => {
  return (
    <div>
      <Link href={'/'}>Назад</Link> <br/>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <strong>Author ID: {post.userId}</strong>
    </div>
  )
}

export default Post