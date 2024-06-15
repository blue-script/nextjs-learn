import Link from 'next/link'

type PostType = {
  'userId': number
  'id': number
  'title': string
  'body': string
}

async function fetchData() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts')
  return await data.json()
}

export default async function Home() {
  const posts: PostType[] = await fetchData()

  return (
    <div>
      <h1 className={'bg-slate-500 text-white'}>Main page</h1>
      {
        posts.map(el => (
          <div key={el.id} className={'post'}>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
            <Link href={'/post/' + el.id}>Детальнее</Link>
          </div>
        ))
      }
    </div>
  )
}
