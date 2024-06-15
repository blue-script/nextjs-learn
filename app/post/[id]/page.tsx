import Post, {PostType} from '@/app/components/Post'

type Props = {
  params: { id: string }
}

async function fetchData(id: string) {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1' + id)
  return await data.json()
}

const PagePost = async ({params: {id}}: Props) => {
  const post: PostType = await fetchData(id)

  return (
    <div className={'post'}>
      <Post post={post}/>
    </div>
  )
}

export default PagePost