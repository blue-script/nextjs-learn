import type {Metadata} from 'next'

export const metadata: Metadata = {
  title: "Страница про нас",
  description: "Страница про нас",
  keywords: "",
};

export default function About() {
  return (
    <div>
      <h1 className={'bg-slate-500 text-white'}>Страница про нас</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, quasi!
      </p>
    </div>
  )
}
