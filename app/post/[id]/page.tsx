import Post, {PostType} from '@/app/components/Post'

type Props = {
  params: { id: string }
}

type MetadataProps = {
  params: { id: string }
  searchParams: Record<string, any>
}

export async function generateMetadata({params, searchParams}: MetadataProps) {
  const post = await fetchData(params.id)

  return {
    title: post.title,
    description: post.body,
  }
}

export async function generateStaticParams() {
  // Загрузка всех постов для генерации параметров
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()

  // Генерация параметров для статических страниц
  return posts.map((post: PostType) => ({
    id: post.id.toString(),
  }))
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